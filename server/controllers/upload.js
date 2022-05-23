const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

module.exports.store = (req, res) => {
  let certif;
  let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send({ result: "No files were uploaded" });
  }
  certif = req.files.certif;
  console.log(req.files.certif);
  uploadPath = __dirname + "/../docs/" + certif.name;
  if (certif.mimetype != "application/pdf") {
    return res.send({ result: "Le fichier n'a pas la bonne extension" });
  }

  certif.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });

  // TODO Vérifier que le champ filename n'est pas déjà rempli pour cet utilisateur
  db.query(
    "UPDATE adherents SET filename=? WHERE mail=?",
    [uploadPath, req.body.mail],
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
};
