"use strict";

var response = require("./rest");

var connect = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST Berhasil");
};
