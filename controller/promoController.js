const db = require("../app/db.js");
const Promo = db.promo;
const Desc_Category = db.desc_category;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.buatPromo = asyncMiddleware(async (req, res) => {
  await Promo.create({
    nama_promo: req.body.nama_promo,
    harga_promo: req.body.harga_promo,
    img: req.body.img,
    status: true,
  });
  res.status(201).send({
    status: "Promo registered successfully!",
  });
});

exports.showsPromo = asyncMiddleware(async (req, res) => {
  const promo = await Promo.findAll({
    attributes: [
      "id_promo",
      "nama_promo",
      "harga_promo",
      "img",
      "status",
      "createdAt",
    ],
  });
  res.status(200).json({
    description: "All Category",
    promo: promo,
  });
});

exports.showPromo = asyncMiddleware(async (req, res) => {
  const promo = await Promo.findAll({
    where: { id_promo: req.params.id },
    attributes: [
      "id_promo",
      "nama_promo",
      "harga_promo",
      "img",
      "status",
      "createdAt",
    ],
  });
  res.status(200).json({
    description: "Promo Content Page",
    promo: promo,
  });
});

exports.ubahPromo = asyncMiddleware(async (req, res) => {
  await Promo.update(
    {
      status: req.body.status,
      nama_promo: req.body.nama_promo,
      harga_promo: req.body.harga_promo,
      img: req.body.img,
    },
    { where: { id_promo: req.params.id } }
  );
  res.status(201).send({
    status: "Promo berhasil di Ubah",
  });
});

exports.hapusPromo = asyncMiddleware(async (req, res) => {
  await Promo.destroy({ where: { id_promo: req.params.id } });
  res.status(201).send({
    status: "Promo berhasil di delete",
  });
});
