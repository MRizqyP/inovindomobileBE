//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Category_Pertanyaan = sequelize.define("categories_pertanyaan", {
    id_categorypertanyaan: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nama_category: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Category_Pertanyaan;
};
