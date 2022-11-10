const express = require('express'),
    app = express(),
    //sequelize
    pug = require('pug'),
    cookieParser = require('cookie-parser'),
    eliminarCache = require('./middlewares/eliminarCache'),
    passport = require("passport");

const port = process.env.port || 3000,
    publicDir = express.static(`${__dirname}/public`),
    viewsDir = `${__dirname}/views`,
    routes = require('./routes/routes'),
    routesTasks = require('./routes/tareas'),
    routesLists = require('./routes/listas'),

    routesAuth = require('./routes/auth'),
    googleMiddleware = require("./middlewares/google");

app
    .set('views', viewsDir)
    .set('view engine', 'pug')
    .set('port', port);

app
    .use(express.json())
    .use(passport.initialize())
    .use(express.urlencoded({ extended: true }))
    .use(cookieParser())
    .use(publicDir)
    .use('/', routes)
    .use('/task', routesTasks)
    .use('/list', routesLists)
    .use(eliminarCache.deleteCache)


app.use(
    "/auth",
    passport.authenticate("auth-google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
        session: false,
    }),
    routesAuth
);

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