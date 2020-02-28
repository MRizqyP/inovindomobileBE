//Setup Express web server
var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(morgan("common"));
const db = require("./app/db.js");
app.use(cors());
const Role = db.role;
const Book = db.book;

// require("./router/router.js")(app);
// force: true will drop the table if it already exists (comment this part aft
// er first run, to disable migration)
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
  //   initial();
});

// require("./app/route/project.route.js")(app);

// Create a Server
var server = app.listen(8085, "127.0.0.1", function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

// function initial() {
//   Role.create({
//     id: 1,
//     name: "USER"
//   });
//   Role.create({
//     id: 2,
//     name: "ADMIN"
//   });
//   Role.create({
//     id: 3,
//     name: "PM"
//   });
// }
// function book() {
//   Book.create({
//     title: "Sikancil",
//     author: "Kinyot",
//     published_date: "ea",
//     pages: "21",
//     language: "inggris",
//     published_id: "12"
//   });
// }
