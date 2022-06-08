import React, { useContext, useState } from "react";

import { MyContext } from "../Signin";

const Infos = () => {
  const { userData, setUserData } = useContext(MyContext);
  const { setStepCompleted } = useContext(MyContext);

  const [prenom, setPrenom] = useState();
  const [nom, setNom] = useState();
  const [sex, setSexe] = useState("male");
  const [birthdate, setDate] = useState();
  const [adress, setAdresse] = useState();
  const [postcode, setCode] = useState();
  const [city, setVille] = useState();
  const [mail, setMail] = useState();
  const [tel, setTel] = useState();
  const [sport, setSport] = useState("athle");
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inscription = {
      prenom,
      nom,
      sex,
      birthdate,
      adress,
      postcode,
      city,
      mail,
      tel,
      sport,
      password,
    };
    await fetch("http://localhost:5000/auth/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inscription),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.result);
        setMessage(data.result);
        if (
          data.result === "Votre dossier est enregistré, veuillez continuer"
        ) {
          setUserData(inscription);
          setStepCompleted(true);
        }
      });
  };

  return (
    <div>
      <div className="FormRegister">
        <h1 className="section-title">Créer un Compte</h1>
        <div className="section-content">
          <form onSubmit={handleSubmit}>
            <label>Prenom</label>
            <br />
            <input
              type="text"
              id="prenom"
              name="prenom"
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
            />
            <br />
            <label>Nom</label>
            <br />
            <input
              type="text"
              id="nom"
              name="nom"
              autoComplete="family-name"
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
            <br />
            <label>Sexe</label>
            <br />
            <select
              id="sex"
              name="sex"
              onChange={(e) => {
                setSexe(e.target.value);
              }}
            >
              <option value="male">Homme</option>
              <option value="female">Femme</option>
              <option defaultValue="NSP">Prefer not to say</option>
            </select>
            <br />
            <label>Date de naissance </label>
            <br />
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              autoComplete="bday"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />

            <br />
            <label>Adresse </label>
            <br />
            <input
              type="text"
              id="adress"
              name="adress"
              onChange={(e) => {
                setAdresse(e.target.value);
              }}
            />
            <br />
            <label>Code postal </label>
            <br />
            <input
              type="number"
              id="postcode"
              name="postcode"
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
            <br />
            <label>Ville </label>
            <br />
            <input
              type="text"
              id="city"
              name="city"
              onChange={(e) => {
                setVille(e.target.value);
              }}
            />
            <br />
            <label>Mail </label>
            <br />
            <input
              type="email"
              id="mail"
              name="mail"
              autoComplete="email"
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
            <br />
            <label>Téléphone </label>
            <br />
            <input
              type="tel"
              id="tel"
              name="tel"
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
            <br />
            <label>Sport principal</label>
            <br />
            <select
              id="sport"
              name="sport"
              onChange={(e) => {
                setSport(e.target.value);
              }}
            >
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
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <button type="submit">Valider</button>
            {message != undefined && <h4>{message}</h4>}
            {/* {validFields ? "" : <h4> Veuillez remplir les champs correctement</h4>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Infos;
