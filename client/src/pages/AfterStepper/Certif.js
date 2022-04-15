import { Button } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Certif = () => {
  return (
    <div>
      <h1>Certificat médical</h1>
      <br />
      <label>Sélectionner le fichier </label>
      <input type="file" id="medfile" />
    </div>
  );
};

export default Certif;
