import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Button, Grid, TextField } from "@mui/material";

import Banniere from "../components/Banniere";
import Sponsors from "../components/Sponsors";

const Connexion = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
        const token = {
          result: data.result,
          mail: data.mail,
          role: data.role,
          nom: data.nom,
          prenom: data.prenom,
          payvalid: data.payvalid,
          filevalid: data.filevalid,
        };
        sessionStorage.setItem("userlogged", JSON.stringify(token));
        if (data.role === "admin") {
          console.log("tu accèdes à admin");
          navigate("/private/admin");
        } else {
          navigate("/private/user");
        }
      });
  };

  return (
    <div>
      <Banniere />
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
            type="password"
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
      <Sponsors />
    </div>
  );
};

export default Connexion;
