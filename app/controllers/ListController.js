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
                where: { id}
            })
        }
        res.send(data) ;
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
    }
}


