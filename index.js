//Setup Express web server
var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
app.use(bodyParser.json());
app.use(morgan("common"));
const db = require("./app/db.js");
app.use(cors());
const Role = db.role;
const Book = db.book;
app.use(fileUpload());
app.use(express.static("./public/uploads/"));

// force: true will drop the table if it already exists (comment this part aft
// er first run, to disable migration)
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync with { force: true }");
//   // book();
// });
// require("./app/route/project.route.js")(app);

app.post("/upload", function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let sampleFile = req.files.file;

  let file_name = Date.now() + "_" + sampleFile.name;
  sampleFile.mv(`./public/uploads/${file_name}`, function (err) {
    if (err) return res.status(500).send(err);
    res.status(200).send({
      status: "File uploaded!",
      title: req.body.title,
      url: file_name,
    });
  });
});
require("./router/router.js")(app);

// Create a Server
var server = app.listen(8085, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
