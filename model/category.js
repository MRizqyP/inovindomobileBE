//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("Categories", {
    id_category: {
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
  return Komentar;
};
