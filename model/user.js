//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id_user: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    img: {
      type: Sequelize.STRING,
    },
    tanggal_lahir: {
      type: Sequelize.DATE,
    },
    kota: {
      type: Sequelize.STRING,
    },
    negara: {
      type: Sequelize.STRING,
    },
    no_hp: {
      type: Sequelize.STRING,
    },
    provider: {
      type: Sequelize.STRING,
    },
    admin: {
      type: Sequelize.BOOLEAN,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });
  return User;
};
