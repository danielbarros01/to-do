const { Task, User, List, connection } = require('../models/index');
f = require('../public/js/funcionalidades.js')

module.exports = {
    async all() {
        let tasks = await Task.findAll({
            include: {
                association: "lista"
            }
        });

        tasks.forEach(task => {
            task.expiration_date = f.formatear(new Date(task.expiration_date))
            task.creation_date = f.formatear(new Date(task.creation_date))
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

        return tasks;
    },

    async save(req, res) {
        res.setHeader('Content-type', 'text/plain');
        const task = await req.body;

        let crear = await Task.create(task);

        res.send(crear);
    },

    async delete(req, res) {
        const id = req.body.id;

        let eliminar = await Task.destroy({ where: { id } });

        res.json({ id })
    },

    async update(req, res) {
        const task = req.body;
        const id = req.params.id;

        let actualizar = await Task.update({
            status: task.status,
            priority: task.priority,
            date_of_resolution: task.date_of_resolution
        }, {
            where: {
                id
            }
        })

        res.json(actualizar);
    },

    async saveForUser(req, res) {
        res.setHeader('Content-type', 'text/plain');
        //obtengo lo mandado por ajax
        let { title, description, priority, status, expiration_date, creation_date, date_of_resolution, userId }
            = await req.body;

        console.log(userId)

        let user = await User.findOne({ where: { id: userId } });

        if(!user){
            return res.status(406).send("Usuario no encontrado");
        }

        //obtengo el id de la lista tareas asignadas
        let list = await List.findOrCreate({
            where: { 
                title: 'Tareas asignadas',
                user_id: userId,
            },
            defaults: {
                title: 'Tareas asignadas',
                creation_date: new Date(),
                status: 'sin resolver',
                archivada: false,
                user_id: userId
              }
        });

        console.log(list[0])
        let task = { title, description, priority, status, expiration_date, creation_date, date_of_resolution, list_id: list[0].id }

        let crear = await Task.create(task);

        res.send(crear);
    },
}

