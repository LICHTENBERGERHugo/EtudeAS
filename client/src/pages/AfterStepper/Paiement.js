import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Paiement = () => {
  const URL = `https://lyf.apayer.fr/as-insa-rennes/licence-20212022`;

  return (
    <div>
      <h1>Veuillez renseigner vos informations de paiement</h1>
      <iframe className="Lyfpay" frameBorder="0" src={URL} scrolling="no" />
    </div>
  );
};

export default Paiement;
