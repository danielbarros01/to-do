const express = require('express'),
    app = express(),
    //sequelize
    pug = require('pug'),
    cookieParser = require('cookie-parser'),
    eliminarCache = require('./middlewares/eliminarCache');

const port = process.env.port || 3000,
    publicDir = express.static(`${__dirname}/public`),
    viewsDir = `${__dirname}/views`,
    routes = require('./routes/routes'),
    routesTasks = require('./routes/tareas'),
    routesLists = require('./routes/listas'),
    routesAuth = require('./routes/auth');

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


app.use((req, res, next) => {
    let error = new Error(),
        locals = {
            title: 'Error 404',
            description: 'Recurso no encontrado',
            error: error
        };

    error.status = 404;
    res.redirect('/home');
    next();
});

module.exports = app;