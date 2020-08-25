//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Promo = sequelize.define("promo", {
    id_promo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nama_promo: {
      type: Sequelize.STRING,
    },
    harga_promo: {
      type: Sequelize.FLOAT,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    img: {
      type: Sequelize.STRING,
    },
  });
  return Promo;
};
