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
    attributes: ["id_user", "name", "username", "email", "status", "admin"]
  });
  res.status(200).json({
    description: "All User",
    user: user
  });
});

exports.userContent = asyncMiddleware(async (req, res) => {
  const user = await User.findOne({
    where: { id_artikel: req.params.id },
    attributes: ["id_user", "name", "username", "email", "status"]
  });
  res.status(200).json({
    description: "User Content Page",
    user: user
  });
});

exports.blockUser = asyncMiddleware(async (req, res) => {
  await User.update(
    {
      status: req.body.status
    },
    { where: { id_user: req.params.id } }
  );
  res.status(201).send({
    status: "User berhasil di block"
  });
});

exports.adminBoard = asyncMiddleware(async (req, res) => {
  const user = await User.findOne({
    where: { id: req.userId },
    attributes: ["name", "username", "email"],
    include: [
      {
        model: Role,
        attributes: ["id", "name"],
        through: {
          attributes: ["userId", "roleId"]
        }
      }
    ]
  });
  res.status(200).json({
    description: "Admin Board",
    user: user
  });
});
exports.managementBoard = asyncMiddleware(async (req, res) => {
  const user = await User.findOne({
    where: { id: req.userId },
    attributes: ["name", "username", "email"],
    include: [
      {
        model: Role,
        attributes: ["id", "name"],
        through: {
          attributes: ["userId", "roleId"]
        }
      }
    ]
  });
  res.status(200).json({
    description: "Management Board",
    user: user
  });
});
