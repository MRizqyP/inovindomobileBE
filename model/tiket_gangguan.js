//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const tiket = sequelize.define("tikets", {
    id_tiket: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    status_tiket: {
      type: Sequelize.STRING,
    },
    desc_tiket: {
      type: Sequelize.STRING,
    },
  });
  return tiket;
};
