const { Task, connection } = require('../database/db');
f = require('../public/js/funcionalidades.js')

module.exports = {
    async all() {
        let tasks = await Task.findAll({
            include: {
                association: "lista"
            }
        });

        tasks.forEach(task => {
            task.expiration_date2 = f.formatear(new Date(task.expiration_date))
            task.creation_date2 = f.formatear(new Date(task.creation_date))
            switch (task.priority) {
                case '1': task.priority2 = "BAJA"
                    break;
                case '2': task.priority2 = "MEDIA"
                    break;
                case '3': task.priority2 = "ALTA"
                    break;
                default: task.priority2 = "SIN PRIORIDAD"
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
    }
}

