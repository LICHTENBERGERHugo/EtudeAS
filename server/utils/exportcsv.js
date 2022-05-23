const mysql = require("mysql");
const fastcsv = require("fast-csv");
const fs = require("fs");
const { dirname } = require("path");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

module.exports.export = (req, res) => {
  const ws = fs.createWriteStream("adherents.csv");
  db.query(
    "SELECT nom,prenom,datenaissance,sexe,adresse,codepostal,ville,mail,tel,sport,role,filevalid,paymentvalid FROM adherents",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const jsonData = JSON.parse(JSON.stringify(result));
        console.log(jsonData);

        fastcsv
          .write(jsonData, { headers: true })
          .on("finish", function () {
            res.send({ result: "Excel généré ! " });
          })
          .pipe(ws);
      }
    }
  );
};

module.exports.generate = (req, res) => {
  res.download(__dirname + "/../adherents.csv");
};
