const { Sequelize, DataTypes } = require('sequelize'),
    config = require('../../config/config'),
    db = {};

db.connection = new Sequelize(/* config.database,config.username,config.password, */ config);

//Vinculamos a nuestros modelos a la BD
                                //es el sequelize de arriba
db.Task = require('../models/Task')(db.connection, DataTypes);
db.List = require('../models/List')(db.connection, DataTypes);


//Asociar nuestros modelos
db.Task.associate(db)

module.exports = db;