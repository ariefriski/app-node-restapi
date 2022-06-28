"use strict";

var response = require("./res");

var connect = require("./koneksi");
const connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST Berhasil", res);
};

exports.getAllData = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", (error, rows, fields) => {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.getByIndex = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",
    [id],
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
