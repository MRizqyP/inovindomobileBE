const db = require("../app/db.js");
const config = require("../app/config.js");
const User = db.user;
const Role = db.role;
const Book = db.book;
const asyncMiddleware = require("express-async-handler");
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = asyncMiddleware(async (req, res) => {
  await User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    img: req.body.img,
    // kota: req.body.kota,
    // negara: req.body.negara,
    password: bcrypt.hashSync(req.body.password, 8),
    admin: false,
    status: true,
  });

  res.status(201).send({
    status: "User registered successfully!",
    success: true,
  });
});

exports.signin = asyncMiddleware(async (req, res) => {
  console.log("Sign-In");
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    return res.status(404).send({
      auth: false,
      accessToken: null,
      reason: "User Not Found!",
    });
  }
  const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({
      auth: false,
      accessToken: null,
      reason: "Invalid Password!",
    });
  } else if (user.status === false) {
    return res.status(402).send({
      auth: false,
      accessToken: null,
      reason: "User Anda Tidak Aktif",
    });
  }
  const token = jwt.sign({ id: user.id_user }, config.secret, {
    expiresIn: 86400, // expires in 24 hours
  });
  res.status(200).send({
    auth: true,
    type: "Bearer",
    accessToken: token,
    id: user.id_user,
    status: user.status,
    admin: user.admin,
  });
});
