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
db.order = require("../model/order.js")(sequelize, Sequelize);
db.maintenence = require("../model/maintenence.js")(sequelize, Sequelize);
db.perpanjangan = require("../model/perpanjangan.js")(sequelize, Sequelize);
db.payment = require("../model/payment.js")(sequelize, Sequelize);
db.category = require("../model/category.js")(sequelize, Sequelize);
db.desc_category = require("../model/desc_category.js")(sequelize, Sequelize);
db.promo = require("../model/promo.js")(sequelize, Sequelize);
db.layanan = require("../model/layanan.js")(sequelize, Sequelize);
db.testimoni = require("../model/testimoni.js")(sequelize, Sequelize);
db.pertanyaan = require("../model/pertanyaan.js")(sequelize, Sequelize);
db.category_pertanyaan = require("../model/category_pertanyaan.js")(
  sequelize,
  Sequelize
);
db.desc_promo = require("../model/desc_promo.js")(sequelize, Sequelize);
db.slider = require("../model/slider.js")(sequelize, Sequelize);

db.user.hasMany(db.order, {
  foreignKey: "id_user",
});

db.user.hasMany(db.payment, {
  foreignKey: "id_user",
});

db.category.hasMany(db.order, {
  foreignKey: "id_category",
});

db.category_pertanyaan.hasMany(db.pertanyaan, {
  foreignKey: "id_categorypertanyaan",
});

db.perpanjangan.hasMany(db.order, {
  foreignKey: "id_perpanjangan",
});

db.category.hasMany(db.desc_category, {
  foreignKey: "id_category",
});

db.promo.hasMany(db.desc_promo, {
  foreignKey: "id_promo",
});

db.category.hasMany(db.promo, {
  foreignKey: "id_category",
});

db.order.hasMany(db.maintenence, {
  foreignKey: "id_order",
});

db.promo.belongsTo(db.category, {
  foreignKey: "id_category",
});

db.payment.belongsTo(db.user, {
  foreignKey: "id_user",
});

db.desc_category.belongsTo(db.category, {
  foreignKey: "id_category",
});

db.order.belongsTo(db.user, {
  foreignKey: "id_user",
});

db.order.belongsTo(db.category, {
  foreignKey: "id_category",
});

db.desc_promo.belongsTo(db.promo, {
  foreignKey: "id_promo",
});

db.pertanyaan.belongsTo(db.category_pertanyaan, {
  foreignKey: "id_categorypertanyaan",
});

db.maintenence.belongsTo(db.order, {
  foreignKey: "id_order",
});

db.order.belongsTo(db.perpanjangan, {
  foreignKey: "id_perpanjangan",
});

module.exports = db;
