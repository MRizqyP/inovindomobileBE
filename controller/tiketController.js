const db = require("../app/db.js");
const User = db.user;
const Product = db.product;
const DetailOrder = db.detailorder;
const Tiket = db.tiket_gangguan;

const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.enterTiket = asyncMiddleware(async (req, res) => {
  await Tiket.create({
    status_tiket: req.body.status_tiket,
    desc_tiket: req.body.desc_tiket,
  });

  res.status(201).send({
    status: "Tiket registered successfully!",
  });
});

exports.showTiket = asyncMiddleware(async (req, res) => {
  const tiket = await Tiket.findAll({
    where: { id_tiket: req.params.id },
    attributes: ["id_tiket", "status_tiket", "desc_tiket", "createdAt"],
    include: [
      {
        model: DetailOrder,
        attributes: ["id_detailorder"],
      },
    ],
  });
  res.status(200).json({
    description: "Show Tiket By Id",
    Tiket: tiket,
  });
});

exports.showsOrder = asyncMiddleware(async (req, res) => {
  const order = await Order.findAll({
    attributes: [
      "id_user",
      "id_order",
      "status_Order",
      "id_product",
      "createdAt",
    ],
    include: [
      {
        model: User,
        attributes: ["id_user", "first_name", "last_name", "email", "status"],
      },
      {
        model: Product,
        attributes: [
          "id_product",
          "nama_product",
          "harga",
          "desc_product",
          "status",
          "harga_perpanjang",
        ],
      },
    ],
  });
  res.status(200).json({
    description: "Show Order all",
    order: order,
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
