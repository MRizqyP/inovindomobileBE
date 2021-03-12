//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("Orders", {
    id_order: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    order_razor: {
      type: Sequelize.STRING,
    },
    nama_domain: {
      type: Sequelize.STRING,
    },
    referensi_web: {
      type: Sequelize.STRING,
    },
    theme_color: {
      type: Sequelize.STRING,
    },
    status_Order: {
      type: Sequelize.STRING,
    },
  });
  return Order;
};
