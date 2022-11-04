const express = require('express'),
    router = express.Router();

//Importar controladores
const TaskController = require('../controllers/TaskController');
const ListController = require('../controllers/ListController');

//iniciarSesion
router.get('/', async (req, res) => {
    res.render('signin');
})
//registrarse
router.get('/signup', async (req, res) => {
    res.render('signup');
})

//Home
router.get('/home', async (req, res) => {
    let tasks = await TaskController.all();
    let lists = await ListController.all();
    
    res.render('index2' , { tasks, lists } );
})

module.exports = router;