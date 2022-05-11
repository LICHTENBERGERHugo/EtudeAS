import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Paiement = () => {
  const URL = `https://lyf.apayer.fr/as-insa-rennes/licence-20212022`;

  return (
    <div>
      <h1 className="section-title">
        Veuillez renseigner vos informations de paiement
      </h1>
      <div className="section-content">
        <iframe className="Lyfpay" frameBorder="0" src={URL} scrolling="no" />
      </div>
    </div>
  );
};

export default Paiement;
