const { Task, connection } = require('../database/db');
f = require('../public/js/funcionalidades.js')

module.exports = {
    async all() {
        let tasks = await Task.findAll();

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

    async save(newTask) {
        let crear = await Task.create(newTask)
        
        return crear;
    },

    delete(id) {
        Task.destroy({ where: { id } })
            .then(res => console.log('Tarea eliminada'))
            .catch(err => console.log('error al eliminar tarea', err))
    },

    update(task, id) {
        Task.update({
            status: task.status,
            priority: task.priority
        }, {
            where: {
                id
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}

