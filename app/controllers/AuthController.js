const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = {
    //Login
    signIn(req, res) {
        let { email, password } = req.body;

        //Buscar el usuario
        User.findOne({
            where: {
                email: email
            }
        })
            .then(user => {
                if (!user) {
                    res.status(404).json({ msg: 'No existe usuario con este correo creado' })
                } else {
                    //comparar passwords
                    if (bcrypt.compareSync(password, user.password)) {
                        //si coinciden...
                        //creamos token
                        let token = jwt.sign({ user: user }, authConfig.secret, {
                            expiresIn: authConfig.expires //tiempo que durara el token, tiempo que estaremos autorizados en la app
                        });

                        //devolvemos token
                        /* res.json({
                            user: user,
                            token: token
                        }); */
                        res.redirect('/home');
                        //res.redirect('/usuario');
                        //res.render('usuario', {user: user,token: token})

                    } else {
                        res.status(401).json({ msg: "Password incorrecta" });
                    }
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },

    //Register
    signUp(req, res) {
        //Encriptar password
        let password = bcrypt.hashSync(req.body.password, Number(authConfig.rounds));

        //Crear un usuario
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        })
            .then(user => {
                //Creamos token
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires //tiempo que durara el token, tiempo que estaremos autorizados en la app
                });

                res.json({
                    user: user,
                    token: token
                });
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }
}