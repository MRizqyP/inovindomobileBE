const db = require("../app/db.js");
const Category = db.category;
const Desc_Category = db.desc_category;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.buatCategory = asyncMiddleware(async (req, res) => {
  await Category.create({
    nama_category: req.body.nama_category,
    img: req.body.img,
    harga: req.body.harga,
    status: true,
  });
  res.status(201).send({
    status: "Category registered successfully!",
  });
});

exports.showsCategory = asyncMiddleware(async (req, res) => {
  const category = await Category.findAll({
    attributes: [
      "id_category",
      "nama_category",
      "img",
      "harga",
      "status",
      "createdAt",
    ],
    include: [
      {
        model: Desc_Category,
        attributes: ["id_desc_category", "desc_category", "createdAt"],
      },
    ],
  });
  res.status(200).json({
    description: "All Category",
    category: category,
  });
});

exports.showCategory = asyncMiddleware(async (req, res) => {
  const category = await Category.findAll({
    where: { id_category: req.params.id },
    attributes: [
      "id_category",
      "nama_category",
      "harga",
      "img",
      "status",
      "createdAt",
    ],
    include: [
      {
        model: Desc_Category,
        attributes: ["id_desc_category", "desc_category", "createdAt"],
      },
    ],
  });
  res.status(200).json({
    description: "Category Content Page",
    category: category,
  });
});

exports.ubahCategory = asyncMiddleware(async (req, res) => {
  await Category.update(
    {
      status: req.body.status,
      nama_category: req.body.nama_category,
      harga: req.body.harga,
      img: req.body.img,
    },
    { where: { id_category: req.params.id } }
  );
  res.status(201).send({
    status: "Category berhasil di ubah",
  });
});

exports.hapusCategory = asyncMiddleware(async (req, res) => {
  await Category.destroy({ where: { id_category: req.body.id_category } });
  res.status(201).send({
    status: "Category berhasil di delete",
  });
});
