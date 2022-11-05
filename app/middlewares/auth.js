const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth')
const { User } = require('../models/index');

module.exports = {
    async isAuthenticated(req,res, next){
        if (req.cookies.jwt){
            try {
                const decodificada = await jwt.verify(req.cookies.jwt, authConfig.secret);
                const user = await User.findOne({ where: { id: decodificada.id } })
                if(!user) return next();
                req.user = user;
                return next();
            } catch (error) {
                console.log(error)
                return next();
            }
        }else{
            res.redirect('/login');
        }
    }
}