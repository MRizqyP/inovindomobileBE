module.exports = function (app) {
  const verifySignUp = require("./verifySignUp");
  const authJwt = require("./verifyJwtToken");
  const authController = require("../controller/authController.js");
  const userController = require("../controller/userController.js");
  const detailController = require("../controller/detailController.js");
  const productController = require("../controller/productController");
  const orderController = require("../controller/orderController");
  const tiketController = require("../controller/tiketController");

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
    [
      verifySignUp.checkDuplicateUserNameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    authController.signup
  );
  app.post("/login", authController.signin);
  /* LOGIN & REGISTER */

  /* Peruseran */
  app.get("/api/users", [authJwt.verifyToken], userController.users);
  app.get("/api/user/:id", [authJwt.verifyToken], userController.userContent);
  app.put("/blockuser/:id", [authJwt.verifyToken], userController.blockUser);
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
