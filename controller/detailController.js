const db = require("../app/db.js");
const User = db.user;
const Product = db.product;
const Order = db.order;
const DetailOrder = db.detailorder;
const Tiket = db.tiket_gangguan;
const Maintenence = db.maintenence;
const Payment = db.payment;
const Perpanjangan = db.perpanjangan;

const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.entertranksaksi = asyncMiddleware(async (req, res) => {
  await DetailOrder.create({
    status_detailorder: true,
    id_order: req.body.id_order,
    id_tiket: req.body.id_tiket,
  });

  res.status(201).send({
    status: "Transaksi registered successfully!",
  });
});

exports.showTransaksi = asyncMiddleware(async (req, res) => {
  const detailorder = await DetailOrder.findAll({
    where: { id_detailorder: req.params.id },
    attributes: [
      "id_detailorder",
      "status_detailorder",
      "id_order",
      "id_tiket",
      "createdAt",
    ],
    include: [
      {
        model: Order,
        attributes: ["id_order", "status_Order", "id_product", "createdAt"],
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name", "email", "status"],
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
      },
      {
        model: Tiket,
        attributes: ["id_tiket", "status_tiket", "desc_tiket", "createdAt"],
      },
    ],
  });
  res.status(200).json({
    description: "Show Transaksi By Id",
    detailorder: detailorder,
  });
});

exports.showsTransaksi = asyncMiddleware(async (req, res) => {
  const detailorder = await DetailOrder.findAll({
    attributes: [
      "id_detailorder",
      "status_detailorder",
      "id_order",
      "createdAt",
    ],
    include: [
      {
        model: Order,
        attributes: ["id_order", "status_Order", "id_product", "createdAt"],
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name", "email", "status"],
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
      },
    ],
  });
  res.status(200).json({
    description: "Show DetailOrder all",
    detailorder: detailorder,
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
