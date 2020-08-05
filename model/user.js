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
    admin: {
      type: Sequelize.BOOLEAN,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });
  return User;
};
