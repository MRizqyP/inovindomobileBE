const db = require("../app/db.js");
const config = require("../app/config.js");
const ROLEs = config.ROLEs;
const Category = db.category;
checkDuplicateProduk = (req, res, next) => {
  Category.findOne({
    where: {
      nama_category: req.body.nama_category,
    },
  }).then((category) => {
    if (category) {
      res.status(400).send("Fail -> Nama Produk sudah ada!");
      return;
    }

    Category.findOne({
      where: {
        nama_category: req.body.nama_category,
      },
    }).then((category) => {
      if (category) {
        res.status(400).send("Fail -> Nama Produk sudah ada!");
        return;
      }
      next();
    });
  });
};

const verifyEnterProduk = {};
verifyEnterProduk.checkDuplicateProduk = checkDuplicateProduk;
module.exports = verifyEnterProduk;
