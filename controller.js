"use strict";

var response = require("./res");

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

exports.postData = (req, res) => {
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;
  connection.query(
    "INSERT INTO mahasiswa (nim,nama,jurusan) VALUES (?,?,?)",
    [nim, nama, jurusan],
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasi input data", res);
      }
    }
  );
};

exports.updateData = (req, res) => {
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;
  let id = req.params.id;
  connection.query(
    "UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa = ?",
    [nim, nama, jurusan, id],
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.ok("Update data sukses", res);
      }
    }
  );
};

exports.deleteData = (req, res) => {
  let id = req.params.id;
  connection.query(
    "DELETE FROM mahasiswa where id_mahasiswa= ?",
    [id],
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.ok("berhasil hapus data", res);
      }
    }
  );
};
