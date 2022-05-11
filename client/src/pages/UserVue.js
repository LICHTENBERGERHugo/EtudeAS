import { Alert, Button } from "@mui/material";
import React from "react";
import Banniere from "../components/Banniere";
import Sponsors from "../components/Sponsors";

const UserVue = () => {
  return (
    <div className="uservue">
      <Banniere />
      <h1>Etat de votre commande</h1>
      <br />
      <Alert severity="info">Votre dossier est en cours de traitement</Alert>
      <br />
      <Alert severity="success">Votre paiement a été validé</Alert>
      <br />
      <Alert severity="error" action={<Button>Upload</Button>}>
        Votre certificat n'est pas bon
      </Alert>
      <Sponsors />
    </div>
  );
};

export default UserVue;
