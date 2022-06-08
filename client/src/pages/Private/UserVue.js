import { Alert, Button } from "@mui/material";
import React, { useState } from "react";

const UserVue = () => {
  const token = JSON.parse(sessionStorage.getItem("userlogged"));
  console.log(token);

  let [file, setFile] = useState({});
  let [filename, setFilename] = useState();
  let [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("certif", file);
    console.log(formData.get("certif"));
    formData.append("mail", token.mail);
    formData.append("update", "true");
    await fetch("http://localhost:5000/upload/postFile", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.result);
        setMessage(data.result);
      });
  };

  return (
    <div>
      <h1>
        Bonjour {token.prenom} {token.nom}
      </h1>
      <h2>Etat de votre commande</h2>
      <br />
      {token.filevalid === 0 || token.payvalid === 0 ? (
        <Alert severity="info">Votre dossier est en cours de traitement</Alert>
      ) : (
        <Alert severity="info">Votre dossier a été traité.</Alert>
      )}

      <br />
      {token.payvalid === 0 ? (
        <Alert severity="info">Votre paiement est en cours de traitement</Alert>
      ) : (
        <Alert severity="success">Votre paiement a été validé.</Alert>
      )}

      <br />

      {(() => {
        switch (token.filevalid) {
          case 0:
            return (
              <Alert
                severity="info"
                action={
                  <div>
                    <input type="file" accept=".pdf" onChange={handleChange} />
                    <Button onClick={handleSubmit}>Valider</Button>
                  </div>
                }
              >
                Votre certificat est en cours de traitement ou inexistant.
              </Alert>
            );
          case 1:
            return (
              <Alert
                severity="error"
                action={
                  <div>
                    <input type="file" accept=".pdf" onChange={handleChange} />
                    <Button onClick={handleSubmit}>Envoyer</Button>
                  </div>
                }
              >
                Votre certificat n'est pas valide.
              </Alert>
            );
          case 2:
            return (
              <Alert severity="success">Votre certificat a été validé.</Alert>
            );
          default:
            return (
              <Alert severity="info">
                Un problème est arrivé avec votre certificat.
              </Alert>
            );
        }
      })()}

      <br />
      {message && <Alert severity="success">{message}</Alert>}
    </div>
  );
};

export default UserVue;
