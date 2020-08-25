//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Desc = sequelize.define("desc", {
    id_desc_category: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    desc_category: {
      type: Sequelize.STRING,
    },
  });
  return Desc;
};
