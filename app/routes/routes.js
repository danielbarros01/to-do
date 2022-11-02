const express = require('express'),
    router = express.Router();

//Importar controladores
const TaskController = require('../controllers/TaskController');
const ListController = require('../controllers/ListController');

//Home
router.get('/', async (req, res) => {
    let tasks = await TaskController.all();
    let lists = await ListController.all();
    
    res.render('index2' , { tasks, lists } );
})

//Guardar tarea
router.post('/new', async (req, res) => {
    res.setHeader('Content-type', 'text/plain');
    const task = await req.body;
    let guardar = await TaskController.save(task);

    res.send(guardar);
});

//Eliminar tarea
router.post('/delete', (req, res) => {
    const id = req.body.id;

    TaskController.delete(id);

    res.json({ id })
});

//Actualizar tarea
router.put('/update/:id', (req, res) => {
    const task = req.body;
    console.log(task, req.params.id)
    TaskController.update(task, req.params.id);

    res.json(task);
})


//Traer listas
router.get('/lists', ListController.all);

//Guardar lista
router.post('/newList', async(req,res) => {
    res.setHeader('Content-type', 'text/plain');
    const list = await req.body;
    const guardar = await ListController.save(list)

    res.send(guardar);
})

//Elimindar lista
router.post('/deleteList', async (req,res) => {
    let consulta = await ListController.delete(req.body.id);

    res.send(consulta);
});

module.exports = router;