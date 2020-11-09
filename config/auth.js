const localStrategy = require("passport-local").Strategy
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

// Model de usuario
require("../models/Users")
const User = mongoose.model("users")

module.exports = function(passport){
    
    passport.use(new localStrategy((username, password, done) => {
        User.findOne({cpf: username}).lean().then((user) => {
            if(!user){
                return done(null, false, {message: "Esta conta não existe"})
            }else{
                bcrypt.compare(password, user.password, (error, check) => {
                    if(check){ 
                        return done(null, user)
                    }else{
                        return done(null, false, {message: "Senha incorreta"})
                    }
                })
            }
        })
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}