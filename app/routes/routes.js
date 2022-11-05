const express = require('express'),
    router = express.Router();

//Importar controladores
const TaskController = require('../controllers/TaskController');
const ListController = require('../controllers/ListController');
const AuthController = require('../controllers/AuthController2');
const auth = require('../middlewares/auth')

//iniciarSesion
router.get('/login', async (req, res) => {
    res.render('signin', {alert:false});
})

//router.post('/login', AuthController.signIn);
router.post('/login', AuthController.login) 
//-------------------------------------------------

//registrarse
router.get('/register', async (req, res) => {
    res.render('signup');
})

//router.post('/signup', AuthController.signUp)
router.post('/register', AuthController.register)
//--------------------------------------------------

//logout
router.get('/logout', AuthController.logout)
//------


//Home
router.get('/home', auth.isAuthenticated ,async (req, res) => {
    let tasks = await TaskController.all();
    let lists = await ListController.all();
    
    res.render('index2' , { tasks, lists ,user:req.user} );
})

module.exports = router;