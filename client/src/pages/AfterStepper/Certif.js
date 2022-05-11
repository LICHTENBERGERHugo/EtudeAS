import { Button } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Certif = () => {
  return (
    <div>
      <h1 className="section-title">Certificat médical</h1>
      <div className="section-content">
        <br />
        <label>Sélectionner le fichier PDF </label>
        <br />
        <input type="file" id="medfile" accept=".pdf" />
      </div>
      {/* <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden />
      </Button> */}
    </div>
  );
};

export default Certif;
