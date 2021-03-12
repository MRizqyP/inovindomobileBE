//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const desc_promo = sequelize.define("desc_promo", {
    id_desc_promo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    desc_promo: {
      type: Sequelize.STRING,
    },
  });
  return desc_promo;
};
