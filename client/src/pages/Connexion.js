import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import Banniere from "../components/Banniere";
import Sponsors from "../components/Sponsors";
const Connexion = () => {
  const login = () => {
    // Axios.post("http://localhost:5000/auth/getUser", {
    //   id: id,
    // }).then((res) => {
    //   if (res.data.error) {
    //     alert(res.data.error);
    //   } else {
    // sessionStorage.setItem("accessToken", res.data.accessToken);
    // recupDataUser();
    // history.push("/");
    // }
  };

  return (
    <div>
      <Banniere />
      <div className="connexion">
        <h1>Connectez vous à votre compte AS</h1>
        <form action="http://localhost:5000/auth/getUser" method="POST">
          <label>Mail</label>
          <br />
          <input type="email" id="mail" name="mail" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />

          {/* <TextField
            className="input-connexion"
            required
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            variant="outlined"
          />
          <br />
          <TextField
            className="input-connexion"
            required
            // type="password"
            id="password"
            label="Mot de passe"
            name="password"
            autoComplete="password"
            variant="outlined"
          />
          <div>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button className="return">Retour</Button>
            </NavLink> */}
          <Button type="submit" variant="contained">
            Valider
          </Button>
          {/* </div> */}
        </form>
      </div>
      <Sponsors />
    </div>
  );
};

export default Connexion;
