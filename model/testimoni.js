//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Testimoni = sequelize.define("testimoni", {
    id_testimoni: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nama_testimoni: {
      type: Sequelize.STRING,
    },
    desc_testimoni: {
      type: Sequelize.STRING,
    },
    asal_testimoni: {
      type: Sequelize.STRING,
    },
    pekerjaan_testimoni: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    img: {
      type: Sequelize.STRING,
    },
  });
  return Testimoni;
};
