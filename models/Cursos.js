const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Curso = new Schema({
    nome: {
        type: String,
        required: true
    }
})

mongoose.model('cursos', Curso)
