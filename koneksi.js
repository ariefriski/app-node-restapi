var mysql = require("mysql");

//membuat koneksi
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbrestapi",
  port: 3308,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("koneksi berhasil");
});

module.exports = connection;
