const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const { User } = require('../models/index');


//registrarnos
module.exports = {

    async register(req, res) {

        try {
            const { name, email, password } = req.body;

            let passHash = await bcrypt.hash(password, 10);
            console.log(passHash)

            User.create({ name, email, password: passHash })
                .then(res.redirect('/home'))
                .catch(err => console.log(err))

        } catch (error) {
            res.status(500).json(err);
        }

    },

    async login(req, res) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                res.render('signin', {
                    alert: true,
                    alertTitle: "Cuidado",
                    alertMessage: "Ingrese un usuario y password",
                    alertIcon: 'info',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                })
            } else {
                const usuario = await User.findOne({ where: { email: email } })
                if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
                    res.render('signin', {
                        alert: true,
                        alertTitle: "Cuidado",
                        alertMessage: "Ingrese un usuario y password",
                        alertIcon: 'info',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    })
                } else {
                    //inicio de sesion ok
                    const id = usuario.id;
                    const token = jwt.sign({ id: id }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    })
                    console.log(`Token ${token} para el USUARIO: ${usuario}`)

                    const cookieOptions = {
                        expires: new Date(Date.now() + Number.parseInt(authConfig.expires) * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    res.cookie('jwt', token, cookieOptions);
                    res.render('signin', {
                        alert: true,
                        alertTitle: "Conexion exitosa",
                        alertMessage: "Login Correcto",
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: 'home'
                    })
                }
            }

            console.log(email, password)
        } catch (error) {
            console.log(error);
        }
    },

    async logout(req,res){
        res.clearCookie('jwt');
        return res.redirect('/home')
    }

}