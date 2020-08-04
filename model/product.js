//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("Products", {
    id_product: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nama_product: {
      type: Sequelize.STRING,
    },
    harga: {
      type: Sequelize.INTEGER,
    },
    desc_product: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Komentar;
};
