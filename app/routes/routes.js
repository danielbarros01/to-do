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
router.post('/new', async (req, res) => {
    res.setHeader('Content-type', 'text/plain');
    const task = await req.body;
    await TaskController.save(task);

    let id = await TaskController.obtenerIdInsertado()
    task.id = JSON.stringify(id[0][0].id)

    res.send(task);
});

//Obtener ultimo id
router.get('/ultimoId', async (req,res) => {
    let id = await TaskController.obtenerIdInsertado()
    
    console.log(JSON.stringify(id[0][0].id)) 
})

//Eliminar tarea
router.post('/delete', (req, res) => {
    const id = req.body.id;

    TaskController.delete(id);

    res.json({ id })
});


router.put('/update/:id', (req, res) => {
    const task = req.body;
    console.log(task, req.params.id)
    TaskController.update(task, req.params.id);

    res.json(task);
})

module.exports = router;