const express = require("express");

const bodyParser = require("body-parser");

const app = express();

//parse applicatio/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// panggil routes
var routes = require("./routes");
routes(app);

app.listen(3000, () => {
  console.log(`Server started on port`);
});

