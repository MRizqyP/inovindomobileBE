//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Pertanyaan = sequelize.define("pertanyaan", {
    id_pertanyaan: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    pertanyaan: {
      type: Sequelize.STRING,
    },
    jawaban_pertanyaan: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Pertanyaan;
};
