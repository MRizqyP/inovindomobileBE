const db = require("../app/db.js");
const Category = db.category;
const Desc_Category = db.desc_category;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.buatDescCategory = asyncMiddleware(async (req, res) => {
  await Desc_Category.create({
    desc_category: req.body.desc_category,
    id_category: req.body.id_category,
  });
  res.status(201).send({
    status: "Desc Category registered successfully!",
  });
});

exports.showsDescCategory = asyncMiddleware(async (req, res) => {
  const desc_category = await Desc_Category.findAll({
    attributes: [
      "id_desc_category",
      "desc_category",
      "id_category",
      "createdAt",
    ],
    include: [
      {
        model: Category,
        attributes: ["id_category", "nama_category", "img", "createdAt"],
      },
    ],
  });
  res.status(200).json({
    description: "All Desc Category",
    desc_category: desc_category,
  });
});

exports.showDescCategory = asyncMiddleware(async (req, res) => {
  const desc_category = await Desc_Category.findAll({
    where: { id_desc_category: req.params.id },
    attributes: ["id_desc_category", "desc_category", "createdAt"],
    include: [
      {
        model: Category,
        attributes: ["id_category", "nama_category", "img", "createdAt"],
      },
    ],
  });
  res.status(200).json({
    description: "Desc_Category Content Page",
    desc_category: desc_category,
  });
});

exports.ubahDescCategory = asyncMiddleware(async (req, res) => {
  await Desc_Category.update(
    {
      desc_category: req.body.desc_category,
    },
    { where: { id_desc_category: req.params.id } }
  );
  res.status(201).send({
    status: "Desc Category berhasil di buat",
  });
});

exports.hapusDescCategory = asyncMiddleware(async (req, res) => {
  await Desc_Category.destroy({
    where: { id_desc_category: req.params.id },
  });
  res.status(201).send({
    status: "Desc Category berhasil di delete",
  });
});
