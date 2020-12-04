const { ObjectID } = require('bson')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Curso = new Schema({
    nome: {
        type: String,
        required: true
    },
    escola: {
        type: Schema.Types.ObjectId
    },
    disciplinas:[{
        nome: String,
        cargaHorariaSemanalSerie: [{type: Number}],
        ordem: Number,

    }],
    turno: String,
    numeroAlunos: Number,
    semanasLetivas: Number,
    diasAulaSemana: Number,
    horaAulaAno: Number,
    diasLetivosAno: Number,
    mediaAprovacao: Number,
    frequenciaMinima: Number,
    horasAulaDia: Number,
    duracaoAula: Number,
    horasAulaSemana: Number,
    duracaoIntervalo: Number,
    tipoAvaliacao: Number,
    periodoCurso: Number,
    encerramento: Date,
    existeRecuperacao1Sem: Boolean,
    existeRecuperacao2Sem: Boolean,
    tipoCalculoMediaBimestre: Number
})

mongoose.model('cursos', Curso)
