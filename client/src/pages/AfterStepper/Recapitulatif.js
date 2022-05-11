import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

const Recapitulatif = () => {
  return (
    <div>
      <h1 className="section-title">Récapitulatif</h1>
      <div className="section-content">
        <h2>Voilà ce que vous avez commandé</h2>
      </div>
    </div>
  );
};

export default Recapitulatif;
