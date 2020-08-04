//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id_user: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nm_lengkap: {
      type: Sequelize.STRING,
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
    admin: {
      type: Sequelize.BOOLEAN,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });
  return User;
};
