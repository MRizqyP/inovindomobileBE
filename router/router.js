module.exports = function (app) {
  const verifySignUp = require("./verifySignUp");
  const verifyProduk = require("./verifyProduk");
  const authJwt = require("./verifyJwtToken");
  const authController = require("../controller/authController.js");
  const userController = require("../controller/userController.js");
  const detailController = require("../controller/detailController.js");
  const productController = require("../controller/productController");
  const orderController = require("../controller/orderController");
  const tiketController = require("../controller/tiketController");
  const categoryController = require("../controller/categoryController");
  const desccategoryController = require("../controller/desc_categoryController");
  const promoController = require("../controller/promoController");
  const layananController = require("../controller/layananController");
  const testimoniContoroller = require("../controller/testimoniController");

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
  app.delete("/api/user/:id", [authJwt.verifyToken], userController.deleteUser);
  app.put("/user/:id", userController.ubahUser);
  /* Peruseran */

  /*perprodukan*/
  app.post("/enterproduct", productController.enterProduct);
  app.get("/showsproduct", productController.showsProduk);
  app.get("/showproduct/:id", productController.showProduk);
  /*perprodukan*/

  /*Order*/
  app.post("/order", [authJwt.verifyToken], orderController.enterOrder);
  app.get("/order/:id", [authJwt.verifyToken], orderController.showOrder);
  app.get("/order", orderController.showsOrder);
  /*Order*/

  /*Detail Order */
  app.post(
    "/transaksi",
    [authJwt.verifyToken],
    detailController.entertranksaksi
  );
  app.get(
    "/transaksi/:id",
    [authJwt.verifyToken],
    detailController.showTransaksi
  );
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
  app.delete("/category", categoryController.hapusCategory);
  app.put("/category/:id", categoryController.ubahCategory);

  /* Desc Category */
  app.post("/desccategory", desccategoryController.buatDescCategory);
  app.get("/desccategory/:id", desccategoryController.showDescCategory);
  app.get("/desccategory", desccategoryController.showsDescCategory);

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

  // app.post("/upload", )

  //   app.delete(
  //     "/books/:id",
  //     [authJwt.verifyToken, authJwt.isAdmin],
  //     bookController.hapusBuku
  //   );

  //   app.get("/orders", [authJwt.verifyToken], orderController.liatsemuaOrder);

  //   app.get("/orders/:id", [authJwt.verifyToken], orderController.liatOrder);

  //   app.post("/orders", [authJwt.verifyToken], orderController.buatOrder);
  //   app.get(
  //     "/api/test/pm",
  //     [authJwt.verifyToken, authJwt.isPmOrAdmin],
  //     userController.managementBoard
  //   );
  //   app.get(
  //     "/api/test/admin",
  //     [authJwt.verifyToken, authJwt.isAdmin],
  //     userController.adminBoard
  //   );

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
