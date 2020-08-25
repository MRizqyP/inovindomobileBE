//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Layanan = sequelize.define("layanan", {
    id_layanan: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nama_layanan: {
      type: Sequelize.STRING,
    },
    desc_layanan: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    img: {
      type: Sequelize.STRING,
    },
  });
  return Layanan;
};
