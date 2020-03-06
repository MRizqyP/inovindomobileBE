const db = require("../app/db.js");
const User = db.user;
const Komentar = db.komentar;
const Artikel = db.artikel;
// const User = db.user;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.showsArtikel = asyncMiddleware(async (req, res) => {
  const artikel = await Artikel.findAll({
    attributes: [
      "id_user",
      "id_artikel",
      "judul",
      "isiartikel",
      "status",
      "createdAt",
      "img"
    ],
    include: [
      {
        model: User,
        attributes: ["id_user", "name", "username"]
      },
      {
        model: Komentar,
        attributes: ["isikomen"],
        include: [
          {
            model: User,
            attributes: ["name"]
          }
        ]
      }
    ]
  });
  res.status(200).json({
    description: "All Artikel",
    artikel: artikel
  });
});

exports.showArtikel = asyncMiddleware(async (req, res) => {
  const artikel = await Artikel.findAll({
    where: { id_user: req.params.id },
    attributes: [
      "id_artikel",
      "judul",
      "isiartikel",
      "status",
      "createdAt",
      "img"
    ],
    include: [
      {
        model: User,
        attributes: ["name"]
      },
      {
        model: Komentar,
        attributes: ["isikomen"],
        include: [
          {
            model: User,
            attributes: ["name"]
          }
        ]
      }
    ]
  });
  res.status(200).json({
    description: "Artikel Content Page",
    artikel: artikel
  });
});

exports.showArtikelId = asyncMiddleware(async (req, res) => {
  const artikel = await Artikel.findAll({
    where: { id_artikel: req.params.id },
    attributes: [
      "id_artikel",
      "judul",
      "isiartikel",
      "status",
      "createdAt",
      "img"
    ],
    include: [
      {
        model: User,
        attributes: ["name"]
      },
      {
        model: Komentar,
        attributes: ["id_komentar", "isikomen", "status"],
        include: [
          {
            model: User,
            attributes: ["name", "id_user"]
          }
        ]
      }
    ]
  });
  res.status(200).json({
    description: "Artikel Content Page",
    artikel: artikel
  });
});

exports.ubahArtikel = asyncMiddleware(async (req, res) => {
  await Artikel.update(
    {
      status: req.body.status
    },
    { where: { id_artikel: req.params.id } }
  );
  res.status(201).send({
    status: "Artikel berhasil di block"
  });
});

exports.buatArtikel = asyncMiddleware(async (req, res) => {
  await Artikel.create({
    judul: req.body.judul,
    isiartikel: req.body.isi,
    id_user: req.body.id,
    img: req.body.img,
    status: false
  });

  res.status(201).send({
    status: "Artikel registered successfully!"
  });
});

exports.hapusArtikel = asyncMiddleware(async (req, res) => {
  await Artikel.destroy({ where: { id_artikel: req.body.id_artikel } });
  res.status(201).send({
    status: "artikel berhasil di delete"
  });
});
