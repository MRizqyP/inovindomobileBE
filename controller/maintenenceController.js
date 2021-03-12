const db = require("../app/db.js");
const Maintenence = db.maintenence;
const Order = db.order;
const asyncMiddleware = require("express-async-handler");
const express = require("express");

var app = express();
app.use(express.json());

exports.buatMaintenence = asyncMiddleware(async (req, res) => {
  await Maintenence.create({
    status_maintenence: req.body.status_maintenence,
    desc_maintenence: req.body.desc_maintenence,
  });
  res.status(201).send({
    status: "Maintenence registered successfully!",
  });
});

exports.showsMaintenence = asyncMiddleware(async (req, res) => {
  const maintenence = await Maintenence.findAll({
    attributes: [
      "id_maintenence",
      "status_maintenence",
      "desc_maintenence",
      
    ],
    include: [
        {
          model: Order,
          attributes: ["id_order", "nama_domain", "order_razor", "theme_color"],
        },
      ],
  });
  res.status(200).json({
    description: "All Maintenence",
    maintenence: maintenence,
  });
});

exports.showMaintenence = asyncMiddleware(async (req, res) => {
  const maintenence = await Maintenence.findAll({
    where: { id_maintenence: req.params.id },
    attributes: [
        "id_maintenence",
        "status_maintenence",
        "desc_maintenence",
    ],  include: [
        {
          model: Order,
          attributes: ["id_order", "nama_domain", "order_razor", "theme_color"],
        },
      ],
  });
  res.status(200).json({
    description: "Maintenence Content Page",
    maintenence: maintenence,
  });
});

exports.ubahMaintenence = asyncMiddleware(async (req, res) => {
  await Maintenence.update(
    {
        status_maintenence: req.body.status_maintenence,
        desc_maintenence: req.body.desc_maintenence,
    },
    { where: { id_maintenence: req.params.id } }
  );
  res.status(201).send({
    status: "Maintenence berhasil di Ubah",
  });
});

exports.hapusMaintenence = asyncMiddleware(async (req, res) => {
  await Maintenence.destroy({ where: { id_maintenence: req.params.id } });
  res.status(201).send({
    status: "Maintenence berhasil di delete",
  });
});
