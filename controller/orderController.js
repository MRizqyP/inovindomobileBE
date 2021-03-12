const db = require("../app/db.js");
const User = db.user;
const Category = db.category;
const Order = db.order;
const Maintenence = db.maintenence;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.enterOrder = asyncMiddleware(async (req, res) => {
  await Order.create({
    status_Order: req.body.status_Order,
    id_user: req.body.id_user,
    nama_domain: req.body.nama_domain,
    referensi_web: req.body.referensi_web,
    theme_color: req.body.theme_color,
    id_category: req.body.id_category,
    order_razor: req.body.order_razor,
    id_maintenence: req.body.id_maintenence,
  });

  res.status(201).send({
    status: "Order registered successfully!",
  });
});

exports.showOrder = asyncMiddleware(async (req, res) => {
  const order = await Order.findAll({
    where: { id_order: req.params.id },
    attributes: [
      "id_order",
      "status_Order",
      "nama_domain",
      "referensi_web",
      "theme_color",
      "id_category",
      "order_razor",
      "createdAt",
    ],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name", "email", "status"],
      },
      {
        model: Category,
        attributes: [
          "id_category",
          "nama_category",
          "harga",
          "img",
          "harga_perpanjangan",
        ],
      },
      {
        model: Maintenence,
        attributes: [
          "id_maintenence",
          "status_maintenence",
          "desc_maintenence",
        ],
      },
    ],
  });
  res.status(200).json({
    description: "Show Order By Id",
    order: order,
  });
});

exports.showOrderByUser = asyncMiddleware(async (req, res) => {
  const order = await Order.findAll({
    where: {
      id_user: req.params.id,
    },
    attributes: [
      "id_order",
      "id_user",
      "status_Order",
      "nama_domain",
      "referensi_web",
      "theme_color",
      "id_category",
      "order_razor",
      "createdAt",
    ],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name", "email", "status"],
      },
      {
        model: Category,
        attributes: [
          "id_category",
          "nama_category",
          "harga",
          "img",
          "harga_perpanjangan",
        ],
      },
      {
        model: Maintenence,
        attributes: [
          "id_maintenence",
          "status_maintenence",
          "desc_maintenence",
        ],
      },
    ],
  });
  res.status(200).json({
    description: "Show Order By Id",
    order: order,
  });
});

exports.showOrderByUserProses = asyncMiddleware(async (req, res) => {
  const order = await Order.findAll({
    where: {
      id_user: req.params.id,
      status_Order: "Sedang Proses Pembuatan",
    },
    attributes: [
      "id_order",
      "id_user",
      "status_Order",
      "nama_domain",
      "referensi_web",
      "theme_color",
      "id_category",
      "order_razor",
      "createdAt",
    ],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name", "email", "status"],
      },
      {
        model: Category,
        attributes: [
          "id_category",
          "nama_category",
          "harga",
          "img",
          "harga_perpanjangan",
        ],
      },
      {
        model: Maintenence,
        attributes: [
          "id_maintenence",
          "status_maintenence",
          "desc_maintenence",
        ],
      },
    ],
  });
  res.status(200).json({
    description: "Show Order By Id",
    order: order,
  });
});

exports.showOrderByUserLunas = asyncMiddleware(async (req, res) => {
  const order = await Order.findAll({
    where: {
      id_user: req.params.id,
      status_Order: "Lunas",
    },
    attributes: [
      "id_order",
      "id_user",
      "status_Order",
      "nama_domain",
      "referensi_web",
      "theme_color",
      "id_category",
      "order_razor",
      "createdAt",
    ],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name", "email", "status"],
      },
      {
        model: Category,
        attributes: [
          "id_category",
          "nama_category",
          "harga",
          "img",
          "harga_perpanjangan",
        ],
      },
      {
        model: Maintenence,
        attributes: [
          "id_maintenence",
          "status_maintenence",
          "desc_maintenence",
        ],
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
    attributes: [
      "id_user",
      "id_order",
      "nama_domain",
      "referensi_web",
      "theme_color",
      "status_Order",
      "id_category",
      "order_razor",
      "createdAt",
    ],
    include: [
      {
        model: User,
        attributes: ["id_user", "first_name", "last_name", "email", "status"],
      },
      {
        model: Category,
        attributes: [
          "id_category",
          "nama_category",
          "harga",
          "harga_perpanjangan",
        ],
      },
      {
        model: Maintenence,
        attributes: [
          "id_maintenence",
          "status_maintenence",
          "desc_maintenence",
        ],
      },
    ],
  });
  res.status(200).json({
    description: "Show Order all",
    order: order,
  });
});

exports.ubahOrder = asyncMiddleware(async (req, res) => {
  await Order.update(
    {
      status_Order: req.body.status_Order,
      nama_domain: req.body.nama_domain,
      referensi_web: req.body.referensi_web,
      theme_color: req.body.theme_color,
      id_maintenence: req.body.id_maintenence,
    },
    { where: { id_order: req.params.id } }
  );
  res.status(201).send({
    status: "Order berhasil di ubah",
  });
});

exports.hapusOrder = asyncMiddleware(async (req, res) => {
  await Order.destroy({ where: { id_order: req.body.id_order } });
  res.status(201).send({
    status: "Order berhasil di delete",
  });
});
