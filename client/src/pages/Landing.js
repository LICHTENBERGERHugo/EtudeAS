import React from "react";
import { Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Banniere from "../components/Banniere";
import Sponsors from "../components/Sponsors";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      {/* <Carousel
        showThumbs={false}
        width="20%"
        autoPlay={true}
        className="Carousel"
        infiniteLoop={true}
      >
        <img src="\assets\IMG_0371.jpg" alt="photo5" class="photo5" />
        <img src="\assets\IMG_0370.jpg" alt="photo1" class="photo1" />
        <img src="\assets\IMG_0369.jpg" alt="photo2" class="photo2" />
        <img src="\assets\IMG_0372.jpg" alt="photo3" class="photo3" />
        <img src="\assets\IMG_0373.jpg" alt="photo4" class="photo4" />
      </Carousel> */}

      <Sponsors />
    </div>
  );
};

export default Landing;
