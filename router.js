module.exports = function (app) {
  const verifySignUp = require("./verifySignUp");
  const verifyProduk = require("./verifyProduk");
  const authJwt = require("./verifyJwtToken");
  const authController = require("../controller/authController.js");
  const userController = require("../controller/userController.js");
  const detailController = require("../controller/detailController.js");
  const orderController = require("../controller/orderController");
  const tiketController = require("../controller/tiketController");
  const categoryController = require("../controller/categoryController");
  const desccategoryController = require("../controller/desc_categoryController");
  const promoController = require("../controller/promoController");
  const layananController = require("../controller/layananController");
  const testimoniContoroller = require("../controller/testimoniController");
  const category_pertanyaanController = require("../controller/category_pertanyaanController");
  const pertanyaanController = require("../controller/pertanyaanController");
  const descpromoController = require("../controller/desc_promoController");
  const sliderController = require("../controller/sliderController");

  //   const {
  //     bookValidationRules,
  //     userValidationRules,
  //     validate
  //   } = require("../controller/validator.js");
  const db = require("../app/db");
  const express = require("express");

  app.use(express.json());

  /* LOGIN & REGISTER */
  app.post(
    "/register",
    [verifySignUp.checkDuplicateUserNameOrEmail],
    authController.signup
  );
  app.post("/login", authController.signin);
  /* LOGIN & REGISTER */

  /* Peruseran */
  app.get("/api/users", userController.users);
  app.get("/api/user/:id", userController.userContent);
  app.put("/blockuser/:id", [authJwt.verifyToken], userController.blockUser);
  app.delete("/api/user/:id", userController.deleteUser);
  app.put("/user/:id", userController.ubahUser);
  /* Peruseran */

  /*Order*/
  app.post("/order", orderController.enterOrder);
  app.get("/order/:id", orderController.showOrder);
  app.get("/order/user/:id", orderController.showOrderByUser);
  app.get("/order/user/proses/:id", orderController.showOrderByUserProses);
  app.get("/order/user/lunas/:id", orderController.showOrderByUserLunas);
  app.get("/order", orderController.showsOrder);
  app.delete("/order", orderController.hapusOrder);
  app.put("/order/:id", orderController.ubahOrder);
  /*Order*/

  /*Detail Order */
  app.post("/transaksi", detailController.entertranksaksi);
  app.get("/transaksi/:id", detailController.showTransaksi);
  app.get("/transaksi", detailController.showsTransaksi);

  /*Detail Tiket */
  app.post("/tiket", [authJwt.verifyToken], tiketController.enterTiket);
  app.get("/tiket/:id", [authJwt.verifyToken], tiketController.showTiket);

  /*Detail Tiket */

  /* Category */
  app.post(
    "/category",
    [verifyProduk.checkDuplicateProduk],
    categoryController.buatCategory
  );
  app.get("/category/:id", categoryController.showCategory);
  app.get("/category", categoryController.showsCategory);
  app.delete("/category/:id", categoryController.hapusCategory);
  app.put("/category/:id", categoryController.ubahCategory);

  /* Desc Category */
  app.post("/desccategory", desccategoryController.buatDescCategory);
  app.get("/desccategory/:id", desccategoryController.showDescCategory);
  app.get("/desccategory", desccategoryController.showsDescCategory);

  app.delete("/desccategory/:id", desccategoryController.hapusDescCategory);

  /* Promo */
  app.post("/promo", promoController.buatPromo);
  app.get("/promo/:id", promoController.showPromo);
  app.get("/promo", promoController.showsPromo);
  app.delete("/promo/:id", promoController.hapusPromo);
  app.put("/promo/:id", promoController.ubahPromo);

  /*layanan*/
  app.post("/layanan", layananController.buatLayanan);
  app.get("/layanan/:id", layananController.showLayanan);
  app.get("/layanan", layananController.showsLayanan);
  app.delete("/layanan/:id", layananController.hapusLayanan);
  app.put("/layanan/:id", layananController.ubahLayanan);

  /*testimoni*/
  app.post("/testimoni", testimoniContoroller.buatTestimoni);
  app.get("/testimoni/:id", testimoniContoroller.showTestimoni);
  app.get("/testimoni", testimoniContoroller.showsTestimoni);
  app.delete("/testimoni/:id", testimoniContoroller.hapusTestimoni);
  app.put("/testimoni/:id", testimoniContoroller.ubahTestimoni);

  /*category_pertanyaan */
  app.post(
    "/categorypertanyaan",
    category_pertanyaanController.buatCategoryPertanyaan
  );
  app.get(
    "/categorypertanyaan/:id",
    category_pertanyaanController.showCategoryPertanyaan
  );
  app.get(
    "/categorypertanyaan",
    category_pertanyaanController.showsCategoryPertanyaan
  );
  app.delete(
    "/categorypertanyaan/:id",
    category_pertanyaanController.hapusCategoryPertanyaan
  );
  app.put(
    "/categorypertanyaan/:id",
    category_pertanyaanController.ubahCategoryPertanyaan
  );

  /*Pertanyaan */
  app.post("/pertanyaan", pertanyaanController.buatPertanyaan);
  app.get("/pertanyaan/:id", pertanyaanController.showPertanyaan);
  app.get("/pertanyaan", pertanyaanController.showsPertanyaan);
  app.delete("/pertanyaan/:id", pertanyaanController.hapusPertanyaan);
  app.put("/pertanyaan/:id", pertanyaanController.ubahPertanyaan);

  /*Desc Promo */
  app.post("/descpromo", descpromoController.buatDescPromo);
  app.get("/descpromo/:id", descpromoController.showDescPromo);
  app.get("/descpromo", descpromoController.showsDescPromo);
  app.delete("/descpromo/:id", descpromoController.hapusDescPromo);
  app.put("/descpromo/:id", descpromoController.ubahDescPromo);

  /* Slider */
  app.post("/slider", sliderController.buatSlider);
  app.get("/slider/:id", sliderController.showSlider);
  app.get("/slider", sliderController.showsSlider);
  app.delete("/slider/:id", sliderController.hapusSlider);
  app.put("/slider/:id", sliderController.ubahSlider);

  // error handler 404
  app.use(function (req, res, next) {
    return res.status(404).send({
      status: 404,
      message: "Not Found",
    });
  });
  // error handler 500
  app.use(function (err, req, res, next) {
    return res.status(500).send({
      error: err,
      message: "Not Found",
    });
  });
};
