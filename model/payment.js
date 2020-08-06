//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("Payments", {
    id_payment: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    status_payment: {
      type: Sequelize.STRING,
    },
    success_url: {
      type: Sequelize.STRING,
    },
    cancel_url: {
      type: Sequelize.STRING,
    },
  });
  return Payment;
};
