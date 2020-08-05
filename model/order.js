//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("Orders", {
    id_order: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    status_Order: {
      type: Sequelize.STRING,
    },
  });
  return Order;
};
