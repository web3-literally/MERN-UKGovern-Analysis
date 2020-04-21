let config = require('../config')();
let dbConfig = config.mysql;

let Sequelize = require("sequelize");
let sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./admin_ms/UserModel")(sequelize, Sequelize);
db.company = require("./CompanyModel")(sequelize, Sequelize);
db.person = require("./PersonModel")(sequelize, Sequelize);

module.exports = db;