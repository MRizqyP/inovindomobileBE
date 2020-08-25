const db = require("../app/db.js");
const Testimoni = db.testimoni;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.buatTestimoni = asyncMiddleware(async (req, res) => {
  await Testimoni.create({
    nama_testimoni: req.body.nama_testimoni,
    desc_testimoni: req.body.desc_testimoni,
    asal_testimoni: req.body.asal_testimoni,
    pekerjaan_testimoni: req.body.pekerjaan_testimoni,
    img: req.body.img,
    status: true,
  });
  res.status(201).send({
    status: "Testimoni registered successfully!",
  });
});

exports.showsTestimoni = asyncMiddleware(async (req, res) => {
  const testimoni = await Testimoni.findAll({
    attributes: [
      "id_testimoni",
      "nama_testimoni",
      "desc_testimoni",
      "asal_testimoni",
      "pekerjaan_testimoni",
      "img",
      "status",
      "createdAt",
    ],
  });
  res.status(200).json({
    description: "All Testimoni",
    testimoni: testimoni,
  });
});

exports.showTestimoni = asyncMiddleware(async (req, res) => {
  const testimoni = await Testimoni.findAll({
    where: { id_testimoni: req.params.id },
    attributes: [
      "id_testimoni",
      "nama_testimoni",
      "desc_testimoni",
      "asal_testimoni",
      "pekerjaan_testimoni",
      "img",
      "status",
      "createdAt",
    ],
  });
  res.status(200).json({
    description: "Testimoni Content Page",
    testimoni: testimoni,
  });
});

exports.ubahTestimoni = asyncMiddleware(async (req, res) => {
  await Testimoni.update(
    {
      nama_testimoni: req.body.nama_testimoni,
      desc_testimoni: req.body.desc_testimoni,
      asal_testimoni: req.body.asal_testimoni,
      pekerjaan_testimoni: req.body.pekerjaan_testimoni,
      img: req.body.img,
      status: req.body.status,
    },
    { where: { id_testimoni: req.params.id } }
  );
  res.status(201).send({
    status: "Testimoni berhasil di Ubah",
  });
});

exports.hapusTestimoni = asyncMiddleware(async (req, res) => {
  await Testimoni.destroy({ where: { id_testimoni: req.params.id } });
  res.status(201).send({
    status: "Testimoni berhasil di delete",
  });
});
