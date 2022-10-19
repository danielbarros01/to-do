const express = require('express'),
    app = express(),
    //sequelize
    pug = require('pug');

const port = process.env.port || 3000,
    publicDir = express.static(`${__dirname}/public`),
    viewsDir = `${__dirname}/views`,
    routes = require('./routes/routes');

app
    .set('views', viewsDir)
    .set('view engine', 'pug')
    .set('port', port);

app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(publicDir)
    .use('/', routes);

module.exports = app;