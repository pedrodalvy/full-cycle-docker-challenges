const express = require("express");
const mysql = require("mysql");
const { faker } = require("@faker-js/faker");

const getConnection = () =>
  mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb",
  });

const connection = getConnection();
const sql = `INSERT INTO people (name) values('${faker.name.fullName()}')`;
connection.query(sql);
connection.end();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let html = "<h1>Full Cycle Rocks!</h1>";

  const connection = getConnection();
  connection.query("SELECT name FROM people", (err, rows) => {
    if (err) throw err;

    html += "<p>- Lista de nomes cadastrados no banco de dados</p>";

    html += "<ul>";
    rows.forEach((row) => {
      html += `<li>${row.name}</li>`;
    });
    html += "</ul>";

    res.send(html);
  });

  connection.end();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
