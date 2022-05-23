const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

module.exports.register = (req, res) => {
  const {
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
  } = req.body;
  console.log(req.body);

  if (
    [
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
    ].includes(undefined)
  ) {
    res.send({ result: "Veuillez remplir tous les champs" });
  } else {
    db.query(
      "SELECT mail FROM adherents WHERE mail=?",
      [mail],
      async (error, results) => {
        if (error) {
          console.log(err);
        }

        if (results.length > 0) {
          res.send({ result: "Cet email a déjà été utilisé" });
          return;
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query(
          "INSERT INTO adherents SET ?",
          {
            nom: nom,
            prenom: prenom,
            datenaissance: birthdate,
            sexe: sex,
            adresse: adress,
            codepostal: postcode,
            ville: city,
            mail: mail,
            tel: tel,
            sport: sport,
            password: hashedPassword,
          },
          (err, results) => {
            if (err) {
              res.send({ result: "An error occured" });
              console.log(err);
            } else {
              console.log(results);
              res.send(200, {
                result: "Votre dossier est enregistré, veuillez continuer",
              });
            }
          }
        );
      }
    );
  }
};

module.exports.login = async (req, res) => {
  console.log(req.body);
  const mail = req.body.mail;
  const password = req.body.password;
  let hashedPassword = await bcrypt.hash(password, 8);
  console.log(hashedPassword);

  db.query(
    "SELECT nom,prenom,password,role,filevalid,paymentvalid FROM adherents WHERE mail= ?",
    [mail],
    async (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        console.log(result);
      }
      try {
        if (await bcrypt.compare(req.body.password, result[0].password)) {
          console.log("success");
          let entry = result[0];
          res.send(200, {
            result: true,
            role: entry.role,
            nom: entry.nom,
            prenom: entry.prenom,
            payvalid: entry.paymentvalid,
            filevalid: entry.filevalid,
          });
        } else {
          console.log("not allowed");
          res.send(200, { result: false });
        }
      } catch (error) {
        console.log(error);
      }
    }
  );
};
