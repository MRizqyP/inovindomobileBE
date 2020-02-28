//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Komentar = sequelize.define("komentars", {
    id_komentar: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    isikomen: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  });
  return Komentar;
};
