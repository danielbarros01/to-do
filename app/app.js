const express = require('express'),
    app = express(),
    //sequelize
    pug = require('pug'),
    cookieParser = require('cookie-parser'),
    eliminarCache = require('./middlewares/eliminarCache');;

const port = process.env.port || 3000,
    publicDir = express.static(`${__dirname}/public`),
    viewsDir = `${__dirname}/views`,
    routes = require('./routes/routes'),
    routesTasks = require('./routes/tareas'),
    routesLists = require('./routes/listas');

app
    .set('views', viewsDir)
    .set('view engine', 'pug')
    .set('port', port);

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cookieParser())
    .use(publicDir)
    .use('/', routes)
    .use('/task', routesTasks)
    .use('/list', routesLists)
    .use(eliminarCache.deleteCache)

module.exports = app;