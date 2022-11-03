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

module.exports = router;