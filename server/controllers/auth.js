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

  db.query(
    "SELECT mail FROM adherents WHERE mail=?",
    [mail],
    async (error, results) => {
      if (error) {
        console.log(err);
      }

      if (results.length > 0) {
        // res.send("Email already used");
        console.log("Email already used");
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
            console.log("An error occured");
            console.log(err);
          } else {
            console.log(results);
            // res.send("Values inserted");
          }
        }
      );
    }
  );
};

module.exports.login = async (req, res) => {
  console.log(req.body);
  const mail = req.body.mail;
  const password = req.body.password;
  let hashedPassword = await bcrypt.hash(password, 8);
  console.log(hashedPassword);

  db.query(
    "SELECT * FROM adherents WHERE mail= ? AND password = ? ",
    [mail, hashedPassword],
    (err, result) => {
      if (err) {
        // res.send({ err: err });
      }
      if (result) {
        // res.send(result);
      } else {
        // res.send("No user found");
      }
    }
  );

  // const id = req.body.id;
  // db.query("SELECT * FROM users WHERE id= ?", [id], (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     if (result.length > 0) {
  //       const accessToken = sign(
  //         {
  //           prenom: result[0].prenom,
  //           nom: result[0].nom,
  //           pseudo: result[0].pseudo,
  //           id: result[0].id,
  //           email: result[0].email,
  //         },
  //         "secret message"
  //       );
  //       res.send({
  //         accessToken: accessToken,
  //       });
  //     } else {
  //       res.send({ error: "Id no present in the db" });
  //     }
  //   }
  // });
};
