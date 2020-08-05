const db = require("../app/db.js");
const User = db.user;
const Product = db.product;
const Order = db.order;
const Category = db.catergory;

const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.enterOrder = asyncMiddleware(async (req, res) => {
  await Order.create({
    status_Order: false,
    id_user: req.body.id_user,
  });

  res.status(201).send({
    status: "Order registered successfully!",
  });
});

exports.showOrder = asyncMiddleware(async (req, res) => {
  const order = await Order.findAll({
    where: { id_order: req.params.id },
    attributes: ["id_order", "status_Order", "createdAt"],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name", "email", "status"],
      },
    ],
  });
  res.status(200).json({
    description: "Show Order By Id",
    order: order,
  });
});

exports.showsOrder = asyncMiddleware(async (req, res) => {
  const order = await Order.findAll({
    attributes: ["id_user", "id_order", "status_Order", "createdAt"],
    include: [
      {
        model: User,
        attributes: ["id_user", "first_name", "last_name", "email", "status"],
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
