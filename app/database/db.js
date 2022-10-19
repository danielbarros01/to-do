const { Sequelize } = require('sequelize'),
    config = require('../../config/config'),
    db = {};

db.connection = new Sequelize(/* config.database,config.username,config.password, */ config);

module.exports = db;