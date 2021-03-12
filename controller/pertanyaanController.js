const db = require("../app/db.js");
const Pertanyaan = db.pertanyaan;
const Category_Pertanyaan = db.category_pertanyaan;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.buatPertanyaan = asyncMiddleware(async (req, res) => {
  await Pertanyaan.create({
    pertanyaan: req.body.pertanyaan,
    jawaban_pertanyaan: req.body.jawaban_pertanyaan,
    id_categorypertanyaan: req.body.id_categorypertanyaan,
    status: true,
  });
  res.status(201).send({
    status: "Pertanyaan Berhasil Di Buat!",
  });
});

exports.showsPertanyaan = asyncMiddleware(async (req, res) => {
  const pertanyaan = await Pertanyaan.findAll({
    attributes: [
      "id_pertanyaan",
      "pertanyaan",
      "jawaban_pertanyaan",
      "status",
      "createdAt",
    ],
    include: [
      {
        model: Category_Pertanyaan,
        attributes: ["id_categorypertanyaan", "nama_category", "status"],
      },
    ],
  });
  res.status(200).json({
    description: "All Pertanyaan",
    pertanyaan: pertanyaan,
  });
});

exports.showPertanyaan = asyncMiddleware(async (req, res) => {
  const pertanyaan = await Pertanyaan.findAll({
    where: { id_pertanyaan: req.params.id },
    attributes: [
      "id_pertanyaan",
      "pertanyaan",
      "jawaban_pertanyaan",
      "status",
      "createdAt",
    ],
    include: [
      {
        model: Category_Pertanyaan,
        attributes: ["id_categorypertanyaan", "nama_category", "status"],
      },
    ],
  });
  res.status(200).json({
    description: "Pertanyaan Per Id",
    pertanyaan: pertanyaan,
  });
});

exports.ubahPertanyaan = asyncMiddleware(async (req, res) => {
  await Pertanyaan.update(
    {
      status: req.body.status,
      desc_pertanyaan: req.body.desc_pertanyaan,
      jawaban_pertanyaan: req.body.jawaban_pertanyaan,
    },
    { where: { id_pertanyaan: req.params.id } }
  );
  res.status(201).send({
    status: "Pertanyaan berhasil di ubah",
  });
});

exports.hapusPertanyaan = asyncMiddleware(async (req, res) => {
  await Pertanyaan.destroy({ where: { id_pertanyaan: req.params.id } });
  res.status(201).send({
    status: "Pertanyaan berhasil di delete",
  });
});
