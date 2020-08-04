//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admins", {
    id_admin: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    nm_lengkap: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    no_telp: {
      type: Sequelize.STRING,
    },
    level: {
      type: Sequelize.INTEGER,
    },
  });
  return Artikel;
};
