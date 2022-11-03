const {connection} = require('../database/db');

const app = require('../app.js'),
    server = app.listen(app.get('port'), () => {
        console.log(`Iniciando Express en el puerto ${app.get('port')}`)

        connection.authenticate()
            .then(() => { console.log("Se ha establecido la conexion con la Base de datos")})
    });