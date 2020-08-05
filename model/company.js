//Mendifinisikan Sequelize Model
module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("Companies", {
    id_company: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nama_company: {
      type: Sequelize.STRING,
    },
    bidang_company: {
      type: Sequelize.STRING,
    },
    alamat_company: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Company;
};
