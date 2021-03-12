const db = require("../app/db.js");
const Slider = db.slider;
const asyncMiddleware = require("express-async-handler");
const express = require("express");
var app = express();
app.use(express.json());

exports.buatSlider = asyncMiddleware(async (req, res) => {
  await Slider.create({
    title: req.body.title,
    caption: req.body.caption,
    url: req.body.url,
  });
  res.status(201).send({
    status: "Slider registered successfully!",
  });
});

exports.showsSlider = asyncMiddleware(async (req, res) => {
  const slider = await Slider.findAll({
    attributes: ["id_slider", "title", "caption", "url", "createdAt"],
  });
  res.status(200).json({
    description: "All Slider",
    slider: slider,
  });
});

exports.showSlider = asyncMiddleware(async (req, res) => {
  const slider = await Slider.findAll({
    where: { id_slider: req.params.id },
    attributes: ["id_slider", "title", "caption", "url", "createdAt"],
  });
  res.status(200).json({
    description: "Slider Content Page",
    slider: slider,
  });
});

exports.ubahSlider = asyncMiddleware(async (req, res) => {
  await Slider.update(
    {
      title: req.body.title,
      caption: req.body.caption,
      url: req.body.url,
    },
    { where: { id_slider: req.params.id } }
  );
  res.status(201).send({
    status: "Slider berhasil di Ubah",
  });
});

exports.hapusSlider = asyncMiddleware(async (req, res) => {
  await Slider.destroy({ where: { id_slider: req.params.id } });
  res.status(201).send({
    status: "Slider berhasil di Delete",
  });
});
