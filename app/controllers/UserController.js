const { User, List, Task } = require('../models/index');

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

        //res.json(listas2)
        res.render('index2' , {lists: listas2});
    }
}
