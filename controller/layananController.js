const db = require("../app/db.js");
const Layanan = db.layanan;
const asyncMiddleware = require("express-async-handler");
const express = require("express");
var app = express();
app.use(express.json());

exports.buatLayanan = asyncMiddleware(async (req, res) => {
  await Layanan.create({
    nama_layanan: req.body.nama_layanan,
    desc_layanan: req.body.desc_layanan,
    img: req.body.img,
    status: true,
  });
  res.status(201).send({
    status: "Layanan registered successfully!",
  });
});

exports.showsLayanan = asyncMiddleware(async (req, res) => {
  const layanan = await Layanan.findAll({
    attributes: [
      "id_layanan",
      "nama_layanan",
      "desc_layanan",
      "img",
      "status",
      "createdAt",
    ],
  });
  res.status(200).json({
    description: "All Layanan",
    layanan: layanan,
  });
});

exports.showLayanan = asyncMiddleware(async (req, res) => {
  const layanan = await Layanan.findAll({
    where: { id_testimoni: req.params.id },
    attributes: [
      "id_layanan",
      "nama_layanan",
      "desc_layanan",
      "img",
      "status",
      "createdAt",
    ],
  });
  res.status(200).json({
    description: "Layanan Content Page",
    layanan: layanan,
  });
});

exports.ubahLayanan = asyncMiddleware(async (req, res) => {
  await Layanan.update(
    {
      nama_layanan: req.body.nama_layanan,
      desc_layanan: req.body.desc_layanan,
      img: req.body.img,
      status: true,
    },
    { where: { id_layanan: req.params.id } }
  );
  res.status(201).send({
    status: "Layanan berhasil di Ubah",
  });
});

exports.hapusLayanan = asyncMiddleware(async (req, res) => {
  await Layanan.destroy({ where: { id_layanan: req.params.id } });
  res.status(201).send({
    status: "Layanan berhasil di Delete",
  });
});
