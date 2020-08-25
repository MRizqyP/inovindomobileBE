const db = require("../app/db.js");
const User = db.user;
const Role = db.role;
const Book = db.book;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());
exports.users = asyncMiddleware(async (req, res) => {
  const user = await User.findAll({
    attributes: [
      "id_user",
      "first_name",
      "last_name",
      "email",
      "status",
      "admin",
      "createdAt",
      "updatedAt",
      "img",
    ],
  });
  res.status(200).json({
    description: "All User",
    user: user,
  });
});

exports.userContent = asyncMiddleware(async (req, res) => {
  const user = await User.findAll({
    where: { id_user: req.params.id },
    attributes: [
      "id_user",
      "first_name",
      "last_name",
      "email",
      "status",
      "admin",
      "createdAt",
      "updatedAt",
      "img",
    ],
  });
  res.status(200).json({
    description: "User Per id",
    user: user,
  });
});

exports.blockUser = asyncMiddleware(async (req, res) => {
  await User.update(
    {
      status: req.body.status,
    },
    { where: { id_user: req.params.id } }
  );
  res.status(201).send({
    status: "User berhasil di block",
  });
});
exports.ubahUser = asyncMiddleware(async (req, res) => {
  await User.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      img: req.body.img,
    },
    { where: { id_user: req.params.id } }
  );
  res.status(201).send({
    status: "User berhasil di Ubah",
  });
});

exports.deleteUser = asyncMiddleware(async (req, res) => {
  await User.destroy({ where: { id_user: req.params.id } });
  res.status(201).send({
    status: "User berhasil di delete",
  });
});
