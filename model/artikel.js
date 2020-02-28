//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Artikel = sequelize.define("artikels", {
    id_artikel: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    isiartikel: {
      type: Sequelize.STRING
    },
    judul: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  });
  return Artikel;
};
