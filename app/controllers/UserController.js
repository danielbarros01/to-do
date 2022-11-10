const { User, List, Task } = require('../models/index');
const f = require('../public/js/funcionalidades.js')

module.exports = {
    async traerUsuario(id) {
        let user = await User.findOne({ where: { id: id } });
        return user;
    },

    async cargarHome(req, res) {
        //traer usuario, posible uso futuro
        let user = await User.findOne({
            where: { id: req.user.id },
            include: {
                association: 'lists'
            }
        });

        //Traer listas con sus tareas
        let listas2 = await List.findAll({
            where: { user_id: user.id },
            include: {
                association: 'tasks'
            }
        })

        listas2.forEach(list => {
            list.tasks.forEach(task => {
                task.expiration_date2 = f.formatear(new Date(task.expiration_date))
                task.creation_date2 = f.formatear(new Date(task.creation_date))
                task.date_of_resolution2 = f.formatear(new Date(task.creation_date))
                switch (task.priority) {
                    case '1': task.priority = "BAJA"
                        break;
                    case '2': task.priority = "MEDIA"
                        break;
                    case '3': task.priority = "ALTA"
                        break;
                    default: task.priority = "SIN PRIORIDAD"
                }
            })
        })

        

        //res.json(listas2)
        res.render('index2' , {lists: listas2});
    }
}