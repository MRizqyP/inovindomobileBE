const db = require("../app/db.js");
const User = db.user;
const Komentar = db.komentar;
const Artikel = db.artikel;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.showsArtikel = asyncMiddleware(async (req, res) => {
  const artikel = await Artikel.findAll({
    attributes: ["id_user", "id_artikel", "judul", "isiartikel", "status"]
  });
  res.status(200).json({
    description: "All Artikel",
    artikel: artikel
  });
});

exports.showComment = asyncMiddleware(async (req, res) => {
  const artikel = await Artikel.findOne({
    where: { id: req.params.id },
    attributes: ["title", "content"],
    include: [
      {
        model: Comment,
        attributes: ["userId", "content"]
      }
    ]
  });
  res.status(200).json({
    description: "Artikel Content Page",
    artikel: artikel
  });
});

exports.ubahKomentar = asyncMiddleware(async (req, res) => {
  await Komentar.update(
    {
      status: false
    },
    { where: { id_komentar: req.params.id } }
  );
  res.status(201).send({
    status: "Artikel berhasil di block"
  });
});

exports.buatKomentar = asyncMiddleware(async (req, res) => {
  await Komentar.create({
    isikomentar: req.body.judul,
    id_artikel: req.body.id_artikel,
    id_user: req.params.id_user,
    status: true
  });

  res.status(201).send({
    status: "Komentar registered successfully!"
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
