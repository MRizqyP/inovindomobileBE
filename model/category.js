//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("categories", {
    id_category: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nama_category: {
      type: Sequelize.STRING,
    },
    img: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    harga: {
      type: Sequelize.INTEGER,
    },
  });
  return Category;
};
