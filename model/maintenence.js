//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Maintenence = sequelize.define("Maintenences", {
    id_maintenence: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    status_maintenence: {
      type: Sequelize.STRING,
    },
    desc_maintenence: {
      type: Sequelize.STRING,
    },
  });
  return Maintenence;
};
