const {sequelize} = require('../models/index');

const app = require('../app.js'),
    server = app.listen(app.get('port'), () => {
        console.log(`Iniciando Express en el puerto ${app.get('port')}`)

        sequelize.authenticate()
        //sequelize.sync({force:true})
            .then(() => { console.log("Se ha establecido la conexion con la Base de datos")})
    });