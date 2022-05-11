import React from "react";
import { Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Banniere from "../components/Banniere";
import Sponsors from "../components/Sponsors";

const Landing = () => {
  return (
    <div>
      <Banniere />
      <Grid container className="landing-buttons">
        <NavLink to="/signin/presentation" style={{ textDecoration: "none" }}>
          <Button className="signin">S'inscrire</Button>
        </NavLink>
        <NavLink to="/connect" style={{ textDecoration: "none" }}>
          <Button className="connect">Se connecter</Button>
        </NavLink>
      </Grid>
      <Sponsors />
    </div>
  );
};

export default Landing;
