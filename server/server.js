const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require('../db/dbConnect.js')

const port = process.env.PORT || 3000;
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.get('/', function (req, res) {
  console.log("hello")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
