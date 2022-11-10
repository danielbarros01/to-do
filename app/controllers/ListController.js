const { List, sequelize } = require('../models/index');

module.exports = {
    async all(req, res) {
        let lists = await List.findAll();

        return lists;
        //res.json(lists)
    },

    async save(req, res) {
        res.setHeader('Content-type', 'text/plain');
        const list = await req.body;

        let crear = await List.create({
            title: list.title,
            creation_date: list.creation_date,
            status: list.status,
            archivada: list.archivada,
            user_id: req.user.id
        });

        console.log(req.user)
        res.send(crear);
    },

    async delete(req, res) {
        const data = {};
        const id = await req.body.id;

        //verificar si tiene tareas
        const [results, metadata] = await sequelize.query(
            `SELECT COUNT(*) AS n_tasks FROM tasks AS Task WHERE Task.list_id = ${id}`
        );
        let tieneTareas = results[0].n_tasks;
        //-----

        if (tieneTareas > 0) {
            data.error = 'La lista tiene tareas'
        } else {
            data.eliminado = await List.destroy({
                where: { id }
            })
        }
        res.send(data);
    },

    async update(req, res) {
        const list = req.body;
        const id = req.params.id;

        let actualizar = await List.update({
            status: list.status,
            date_of_resolution: list.date_of_resolution
        }, {
            where: {
                id
            }
        })

        res.json(actualizar);
    },

    async allArchivadas(req, res) {
        let lists = await List.findAll({
            where: {
                user_id: req.user.id,
                archivada: 1
            },
            include: {
                association: 'tasks'
            }
        });

        lists.forEach(list => {
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

        res.render('archivadas', { lists });
    },

    async sePuedeArchivar(req, res) {
        let list = await List.findOne({
            where: { id: req.params.id },
            include: {
                association: 'tasks'
            }
        }); 
        let tareas = await list.tasks;

        res.json({tareas});
    },

    async archivar(req, res){
        const id = req.params.id;

        let actualizar = await List.update({
            archivada: req.body.archivada
        }, {
            where: {
                id
            }
        })

        res.json(actualizar);
    }
}


