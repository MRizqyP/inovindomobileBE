//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const DetailOrder = sequelize.define("DetailOrders", {
    id_detailorder: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    status_detailorder: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Komentar;
};
