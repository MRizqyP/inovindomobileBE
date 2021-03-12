const db = require("../app/db.js");
const Promo = db.promo;
const Desc_Promo = db.desc_promo;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.buatDescPromo = asyncMiddleware(async (req, res) => {
  await Desc_Promo.create({
    desc_promo: req.body.desc_promo,
    id_promo: req.body.id_promo,
  });
  res.status(201).send({
    status: "Desc Promo registered successfully!",
  });
});

exports.showsDescPromo = asyncMiddleware(async (req, res) => {
  const desc_promo = await Desc_Promo.findAll({
    attributes: ["id_desc_promo", "desc_promo", "id_promo", "createdAt"],
    include: [
      {
        model: Promo,
        attributes: [
          "id_promo",
          "nama_promo",
          "img",
          "createdAt",
          "harga_promo",
        ],
      },
    ],
  });
  res.status(200).json({
    description: "All Description Promo",
    desc_promo: desc_promo,
  });
});

exports.showDescPromo = asyncMiddleware(async (req, res) => {
  const desc_promo = await Desc_Promo.findAll({
    where: { id_desc_promo: req.params.id },
    attributes: ["id_desc_promo", "desc_promo", "id_promo", "createdAt"],
    include: [
      {
        model: Promo,
        attributes: [
          "id_promo",
          "nama_promo",
          "img",
          "createdAt",
          "harga_promo",
        ],
      },
    ],
  });
  res.status(200).json({
    description: "Desc Promo Content Page",
    desc_promo: desc_promo,
  });
});

exports.ubahDescPromo = asyncMiddleware(async (req, res) => {
  await Desc_Promo.update(
    {
      desc_promo: req.body.desc_promo,
    },
    { where: { id_desc_promo: req.params.id } }
  );
  res.status(201).send({
    status: "Desc Promo berhasil di buat",
  });
});

exports.hapusDescPromo = asyncMiddleware(async (req, res) => {
  await Desc_Promo.destroy({
    where: { id_desc_promo: req.params.id },
  });
  res.status(201).send({
    status: "Desc Promo berhasil di delete",
  });
});
