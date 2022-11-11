const express = require('express'),
    router = express.Router();

//Importar controladores
const AuthController = require('../controllers/AuthController2');
const UserController = require('../controllers/UserController');

const auth = require('../middlewares/auth');

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
router.get('/home', auth.isAuthenticated , UserController.cargarHome)


module.exports = router;