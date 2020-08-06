const db = require("../app/db.js");
const User = db.user;
const Product = db.product;
const DetailOrder = db.detailorder;
const Category = db.catergory;

const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.enterProduct = asyncMiddleware(async (req, res) => {
  await Product.create({
    nama_product: req.body.nama_product,
    harga: req.body.harga,
    desc_product: req.body.desc_product,
    harga_perpanjang: req.body.harga_perpanjang,
    status: false,
  });

  res.status(201).send({
    status: "Product registered successfully!",
  });
});

exports.showsProduk = asyncMiddleware(async (req, res) => {
  const product = await Product.findAll({
    attributes: [
      "id_product",
      "nama_product",
      "harga",
      "harga_perpanjang",
      "desc_product",
      "status",
      "createdAt",
      "updatedAt",
    ],
  });
  res.status(200).json({
    description: "All product",
    product: product,
  });
});

exports.showProduk = asyncMiddleware(async (req, res) => {
  const product = await Product.findAll({
    where: { id_product: req.params.id },
    attributes: [
      "id_product",
      "nama_product",
      "harga",
      "harga_perpanjang",
      "desc_product",
      "status",
      "createdAt",
      "updatedAt",
    ],
  });
  res.status(200).json({
    description: "Product By Id",
    product: product,
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
      "img",
    ],
    include: [
      {
        model: User,
        attributes: ["name"],
      },
      {
        model: Komentar,
        attributes: ["isikomen"],
        include: [
          {
            model: User,
            attributes: ["name"],
          },
        ],
      },
    ],
  });
  res.status(200).json({
    description: "Artikel Content Page",
    artikel: artikel,
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
      "img",
    ],
    include: [
      {
        model: User,
        attributes: ["name"],
      },
      {
        model: Komentar,
        attributes: ["id_komentar", "isikomen", "status"],
        include: [
          {
            model: User,
            attributes: ["name", "id_user"],
          },
        ],
      },
    ],
  });
  res.status(200).json({
    description: "Artikel Content Page",
    artikel: artikel,
  });
});

exports.ubahArtikel = asyncMiddleware(async (req, res) => {
  await Artikel.update(
    {
      status: req.body.status,
    },
    { where: { id_artikel: req.params.id } }
  );
  res.status(201).send({
    status: "Artikel berhasil di block",
  });
});

exports.hapusArtikel = asyncMiddleware(async (req, res) => {
  await Artikel.destroy({ where: { id_artikel: req.body.id_artikel } });
  res.status(201).send({
    status: "artikel berhasil di delete",
  });
});
