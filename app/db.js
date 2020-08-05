//initailize sequelize

const env = require("./env.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  logging: false,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../model/user.js")(sequelize, Sequelize);
db.catergory = require("../model/category.js")(sequelize, Sequelize);
db.company = require("../model/company.js")(sequelize, Sequelize);
db.detailorder = require("../model/detailorder.js")(sequelize, Sequelize);
db.order = require("../model/order.js")(sequelize, Sequelize);
db.product = require("../model/product.js")(sequelize, Sequelize);
db.admin = require("../model/admin.js")(sequelize, Sequelize);

db.user.hasMany(db.order, {
  foreignKey: "id_user",
});

db.order.hasMany(db.detailorder, {
  foreignKey: "id_order",
});

db.product.hasMany(db.detailorder, {
  foreignKey: "id_product",
});

db.catergory.hasMany(db.product, {
  foreignKey: "id_category",
});

db.order.belongsTo(db.user, {
  foreignKey: "id_user",
});

// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "roleId",
//   otherKey: "userId"
// });
// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "roleId"
// });

// db.book.belongsToMany(db.user, {
//   through: "book_user",
//   foreignKey: "bookId",
//   otherKey: "userId"
// });
// db.user.belongsToMany(db.book, {
//   through: "book_user",
//   foreignKey: "userId",
//   otherKey: "bookId"
// });
module.exports = db;
