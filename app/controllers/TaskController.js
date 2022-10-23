const { Task } = require('../database/db');
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

    save(newTask) {
        Task.create(newTask)
            .then(res => console.log('Tarea agregada'))
            .catch(err => console.log('error al guardar', err))
    },

    delete(id){
        Task.destroy({where: {id}})
            .then(res => console.log('Tarea eliminada'))
            .catch(err => console.log('error al eliminar tarea', err))
    }
}

