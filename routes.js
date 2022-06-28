"use strict";
module.exports = function (app) {
  var myJson = require("./controller");

  app.route("/").get(myJson.index);

  app.route("/getAll").get(myJson.getAllData);

  app.route("/getIndex/:id").get(myJson.getByIndex);
};
