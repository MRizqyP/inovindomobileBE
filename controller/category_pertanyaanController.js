const db = require("../app/db.js");
const Pertanyaan = db.pertanyaan;
const Category_Pertanyaan = db.category_pertanyaan;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.buatCategoryPertanyaan = asyncMiddleware(async (req, res) => {
  await Category_Pertanyaan.create({
    nama_category: req.body.nama_category,
    status: true,
  });
  res.status(201).send({
    status: "Category Pertanyaan Berhasil Di Buat!",
  });
});

exports.showsCategoryPertanyaan = asyncMiddleware(async (req, res) => {
  const category_pertanyaan = await Category_Pertanyaan.findAll({
    attributes: [
      "id_categorypertanyaan",
      "nama_category",
      "status",
      "createdAt",
    ],
    include: [
      {
        model: Pertanyaan,
        attributes: [
          "id_pertanyaan",
          "pertanyaan",
          "jawaban_pertanyaan",
          "createdAt",
        ],
      },
    ],
  });
  res.status(200).json({
    description: "All Category Pertanyaan",
    category_pertanyaan: category_pertanyaan,
  });
});

exports.showCategoryPertanyaan = asyncMiddleware(async (req, res) => {
  const category_pertanyaan = await Category_Pertanyaan.findAll({
    where: { id_categorypertanyaan: req.params.id },
    attributes: [
      "id_categorypertanyaan",
      "nama_category",
      "status",
      "createdAt",
    ],
    include: [
      {
        model: Pertanyaan,
        attributes: [
          "id_pertanyaan",
          "pertanyaan",
          "jawaban_pertanyaan",
          "createdAt",
        ],
      },
    ],
  });
  res.status(200).json({
    description: "Category Pertanyaan By Id",
    category_pertanyaan: category_pertanyaan,
  });
});

exports.ubahCategoryPertanyaan = asyncMiddleware(async (req, res) => {
  await Category_Pertanyaan.update(
    {
      status: req.body.status,
      nama_category: req.body.nama_category,
    },
    { where: { id_categorypertanyaan: req.params.id } }
  );
  res.status(201).send({
    status: "Category Pertanyaan berhasil di ubah",
  });
});

exports.hapusCategoryPertanyaan = asyncMiddleware(async (req, res) => {
  await Category_Pertanyaan.destroy({
    where: { id_categorypertanyaan: req.params.id },
  });
  res.status(201).send({
    status: "Category Pertanyaan Berhasil Di Delete",
  });
});
