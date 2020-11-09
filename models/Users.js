const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    name:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    userAccess:{
        type: Number,
        default: 0 // 0 - Professor, 1 - Coordenador, 2 - Escola, 3 - Secretaria, 99 - Superuser 
    }
})

mongoose.model('users', User)

