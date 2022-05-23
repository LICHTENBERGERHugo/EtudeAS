import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Alert, Button, Grid, TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";

import Banniere from "../components/Banniere";
import Sponsors from "../components/Sponsors";

const Connexion = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState({
    result: false,
    role: "",
    nom: "",
    prenom: "",
    filevalid: "",
    payvalid: "",
  });
  const [message, setMessage] = useState();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { mail, password };

    await fetch("http://localhost:5000/auth/getUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.result);
        console.log(data.role);
        setToken({
          result: true,
          role: data.role,
          nom: data.nom,
          prenom: data.prenom,
          payvalid: data.payvalid,
          filevalid: data.filevalid,
        });
      });
  };

  const handleExport = async () => {
    await fetch("http://localhost:5000/csv/export", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMessage(data.result);
      });
  };

  return (
    <div>
      <Banniere />
      {!token.result ? (
        <div className="connexion">
          <h1>Connectez vous à votre compte AS</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              className="input-connexion"
              required
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              variant="outlined"
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              className="input-connexion"
              required
              // type="password"
              id="password"
              label="Mot de passe"
              name="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <Grid>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Button className="return">Retour</Button>
              </NavLink>
              <Button type="submit" variant="contained">
                Valider
              </Button>
            </Grid>
          </form>
        </div>
      ) : (
        <div>
          {token.role === "admin" ? (
            <div>
              <h1>Bonjour, administrateur</h1>
              <span>voici la liste des inscriptions à Valider</span>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {[
                  "Hugo Lichtenberger",
                  "Hugo Lamoureux",
                  "Justine Lequin-Souchon",
                  "Quentin Ledilavrec",
                ].map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem
                      key={value}
                      secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                          <DownloadIcon />
                        </IconButton>
                      }
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(value)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
              <br />
              <button onClick={handleExport}>Générer Excel</button>
              <a href="http://localhost:5000/csv/generate">Télécharger Excel</a>
              <br />
              {message === undefined ? "" : <h4>{message}</h4>}
            </div>
          ) : (
            <div>
              <h1>
                Bonjour {token.prenom} {token.nom}
              </h1>
              <h2>Etat de votre commande</h2>
              <br />
              {token.filevalid === 0 || token.payvalid === 0 ? (
                <Alert severity="info">
                  Votre dossier est en cours de traitement
                </Alert>
              ) : (
                <Alert severity="info">Votre dossier a été traité.</Alert>
              )}

              <br />
              {token.payvalid === 0 ? (
                <Alert severity="info">
                  Votre paiement est en cours de traitement
                </Alert>
              ) : (
                <Alert severity="success">Votre paiement a été validé.</Alert>
              )}

              <br />

              {(() => {
                switch (token.filevalid) {
                  case 0:
                    return (
                      <Alert severity="info" action={<Button>Upload</Button>}>
                        Votre certificat est en cours de traitement
                      </Alert>
                    );
                  case 1:
                    return (
                      <Alert severity="error" action={<Button>Upload</Button>}>
                        Votre certificat n'est pas valide.
                      </Alert>
                    );
                  case 2:
                    return (
                      <Alert severity="success">
                        Votre certificat a été validé.
                      </Alert>
                    );
                  default:
                    return (
                      <Alert severity="info" action={<Button>Upload</Button>}>
                        Votre certificat est en cours de traitement
                      </Alert>
                    );
                }
              })()}

              <br />
            </div>
          )}
        </div>
      )}
      <Sponsors />
    </div>
  );
};

export default Connexion;
