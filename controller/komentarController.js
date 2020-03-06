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
  const Komentar = await Komentar.findOne({
    where: { id_komentar: req.params.id },
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

exports.blokKomentar = asyncMiddleware(async (req, res) => {
  await Komentar.update(
    {
      status: req.body.status
    },
    { where: { id_komentar: req.params.id } }
  );
  res.status(201).send({
    status: "Artikel berhasil di block"
  });
});

exports.buatKomentar = asyncMiddleware(async (req, res) => {
  await Komentar.create({
    isikomen: req.body.isikomentar,
    id_artikel: req.body.id_artikel,
    id_user: req.body.id_user,
    status: req.body.status
  });

  res.status(201).send({
    status: "Komentar registered successfully!"
  });
});
exports.hapusKomentar = asyncMiddleware(async (req, res) => {
  await Komentar.destroy({ where: { id_komentar: req.body.id_komentar } });
  res.status(201).send({
    status: "Komentar berhasil di delete"
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
