const express = require('express'),
    router = express.Router();

//Importar controladores
const TaskController = require('../controllers/TaskController');

//Home
router.get('/', async (req, res) => {
    let tasks = await TaskController.all();

    res.render('index', { tasks });
})

//Guardar tarea
router.post('/new', (req, res) => {
    res.setHeader('Content-type', 'text/plain');
    const task = req.body;

    TaskController.save(task);
    res.send(task);
});

//Eliminar tarea
router.post('/delete', (req,res)=>{
    const id = req.body.id;

    TaskController.delete(id);

    res.json({id})
});

module.exports = router;