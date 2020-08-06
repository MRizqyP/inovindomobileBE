//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Perpanjangan = sequelize.define("Perpanjangan", {
    id_perpanjangan: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    status_perpanjangan: {
      type: Sequelize.STRING,
    },
    desc_perpanjangan: {
      type: Sequelize.STRING,
    },
  });
  return Perpanjangan;
};
