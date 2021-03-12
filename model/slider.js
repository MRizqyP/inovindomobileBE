//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Slider = sequelize.define("sliders", {
    id_slider: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    caption: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
  });
  return Slider;
};
