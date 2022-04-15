import React from "react";
import { Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Grid container className="connexion">
        <NavLink to="/signin/presentation">
          <Button className="signin">S'inscrire</Button>
        </NavLink>
        <NavLink to="/connect">
          <Button className="connect">Se connecter</Button>
        </NavLink>
      </Grid>
    </div>
  );
};

export default Landing;
