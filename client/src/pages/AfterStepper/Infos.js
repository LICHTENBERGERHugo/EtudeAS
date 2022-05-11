import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Infos = () => {
  return (
    <div>
      <div className="FormRegister">
        <h1 className="section-title">Créer un Compte</h1>
        <div className="section-content">
          <form action="http://localhost:5000/auth/create" method="POST">
            <label>Prenom</label>
            <br />
            <input
              type="text"
              id="prenom"
              name="prenom"
              // onChange={(e) => setPrenom(e.target.value)}
            />
            <br />
            <label>Nom</label>
            <br />
            <input
              type="text"
              id="nom"
              name="nom"
              // onChange={(e) => setNom(e.target.value)}
            />
            <br />
            <label>Sexe</label>
            <br />
            <select id="sex" name="sex">
              <option value="male">Homme</option>
              <option value="female">Femme</option>
              <option defaultValue="NSP">Prefer not to say</option>
            </select>
            <br />
            <label>Date de naissance </label>
            <br />
            <input type="date" id="birthdate" name="birthdate" />

            <br />
            <label>Adresse </label>
            <br />
            <input type="text" id="adress" name="adress" />
            <br />
            <label>Code postal </label>
            <br />
            <input type="number" id="postcode" name="postcode" />
            <br />
            <label>Ville </label>
            <br />
            <input type="text" id="city" name="city" />
            <br />
            <label>Mail </label>
            <br />
            <input type="email" id="mail" name="mail" />
            <br />
            <label>Téléphone </label>
            <br />
            <input type="tel" id="tel" name="tel" />
            <br />
            <label>Sport principal</label>
            <br />
            <select id="sport" name="sport">
              <option value="athle">Athlétisme</option>
              <option value="aviron">Aviron</option>
              <option value="bad">Badminton</option>
              <option value="basket">Basket 3c3</option>
              <option value="biathlon">Biathlon</option>
              <option value="bikenrun">Bike and run</option>
              <option value="bowling">Bowling</option>
              <option value="boxeed">Boxe éducative</option>
              <option value="boxe">Boxes combat</option>
              <option value="bridge">Bridge</option>
              <option value="canoe-kayak">Canoe-kayak</option>
              <option value="cheerleading">Cheerleading</option>
              <option value="orientation">Course d'orientation</option>
              <option value="cyclisme">Cyclisme - VTT ° Rubri</option>
              <option value="danse">Danse (toutes formes)</option>
              <option value="duathlon">Duathlon</option>
              <option value="echecs">Echecs</option>
              <option value="equitation">Equitation</option>
              <option value="escalade">Escalade</option>
              <option value="escrime">Escrime</option>
              <option value="fitness">Fitness</option>
              <option value="footbal-futsal">Football - Futsal</option>
              <option value="footbal-am">Football américain</option>
              <option value="force-athle">Force Athlétique</option>
              <option value="golf">Golf</option>
              <option value="gym">
                Gymnastiques (Artistique, GR, Team Gym, Trampoline)
              </option>
              <option value="halterophilie">Haltérophilie - Musculation</option>
              <option value="handball">Handball</option>
              <option value="hockey">Hockey</option>
              <option value="judo">Judo - Ju-Jitsu - Ne Waza</option>
              <option value="karate">Karate</option>
              <option value="karting">Karting</option>
              <option value="muaythai">
                Kick Boxing - Muaythai (Light, Pré combat)
              </option>
              <option value="lutte">Lutte - Sambo sportif</option>
              <option value="nage-palm">Nage avec palmes</option>
              <option value="natation">Natation - Natation Synchronisée</option>
              <option value="patin">Patinage artistique et de vitesse</option>
              <option value="pelote-basque">Pelote basque</option>
              <option value="petanque">Pétanque</option>
              <option value="raids">Raids multisports</option>
              <option value="roller">Roller hockey</option>
              <option value="rugby-treize">Rugby à 13</option>
              <option value="rugby-quinze">Rugby à 15</option>
              <option value="savate">Savate Boxe F. Assaut</option>
              <option value="ski">Ski - Snowboard (toutes formes)</option>
              <option value="squash">Squash</option>
              <option value="surf">Surf - Stand Up Paddle</option>
              <option value="swimrun">Swimrun</option>
              <option value="taekwondo">Taekwondo</option>
              <option value="tennis">Tennis - Padel</option>
              <option value="tt">Tennis de table</option>
              <option value="tir-a-larc">Tir à l'arc</option>
              <option value="tir-sportif">Tir sportif</option>
              <option value="triathlon">Triathlon</option>
              <option value="ultimate">Ultimate</option>
              <option value="voile">Voile - Kite Surf</option>
              <option value="volley">Volley - Beach Volley</option>
              <option value="waterpolo">Waterpolo</option>
              <option defaultValue="no">--pas de sport--</option>
            </select>
            <br />
            <label>Password </label>
            <br />
            <input type="password" id="password" name="password" />
            <br />
            <button type="submit">Valider</button>
            {/* {validFields ? "" : <h4> Veuillez remplir les champs correctement</h4>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Infos;
