"use strict";

var response = require("./res");

var connect = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST Berhasil", res);
};
