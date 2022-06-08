const mysql = require("mysql");
const fs = require("fs");
const { dirname } = require("path");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

module.exports.downloadCertif = (req, res) => {
  console.log(req.query);
  res.download(__dirname + "/../docs/" + req.query.filename);
};
