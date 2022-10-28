const { List, Task, connection } = require('../database/db');

module.exports = {
    async all(req, res) {
        let lists = await List.findAll();

        return lists;
    },

    async save(newList) {
        let crear = await List.create(newList);

        return crear;
    },

    async tareasDeLista(id) {
        const [results, metadata] = await connection.query(
            `SELECT COUNT(*) AS n_tasks FROM tasks AS Task WHERE Task.list_id = ${id}`
        );

        return results[0].n_tasks;
    },

    async delete(id) {
        const data = {};

        let tieneTareas = await this.tareasDeLista(id);

        if(tieneTareas>0){
            data.error = 'La lista tiene tareas'
        }else{
            data.eliminado = await List.destroy({
                where: { id }
            })
        }
        console.log(tieneTareas)
        return data;
    }
}


