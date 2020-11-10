const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Aluno = new Schema({
    nome:{
        type: String,
        required: true
    },
    nascimento:{
        type: Date,
        required: true
    },
    NIS:{
        type: String
    },
    IDCenso:{
        type: String
    },
    sexo:{
        type: Number, // 0 - Masculino, 1 - Feminino
        required: true 
    },
    cor:{
        type: Number, // 0 - Branca, 1 - Preta, 2 - Parda, 3 - Amarela, 4 - Indígena, 5 - Quilombola, 6 - Não declarada
        required: true 
    },
    situacao:{
        type: Number, 
        // 0 - Aguardando Matrícula, 1 - Aguardando transferêcia, 2 - Aguardando vaga, 3 - Inativo - Abandonou a escola,
        // 4 - Inativo - Concluiu o curso, 5 - Inativo - Dispensado, 6 - Inativo - Falecido, 7 - Inativo - Outras situações, 
        // 8 - Inativo - Trancou a matricula, 9 - Inativo - Transferido da escola, 10 - Matriculado, 11 - Pré-matricula
        required: true
    },
    emailAluno:{
        type: String,
    },
    deficiencas:[{
        type: Number
        // 0 - Altas Habilidades/Superdotação, 1 - Baixa visão, 2 - Cegueira, 3 - Condutas Típicas, 4 - Deficiência Auditiva,
        // 5 - Deficiência física, 6 - Deficiência Intelectual, 7 - Deficiência multipla, 8 - Deficiencia visual, 9 - Dislexia
        // 10 - Distúrbios alimentares, 11 - Normal, 12 - Outras, 13 - Paralisia Cerebral, 14 - Sindrome Asperger,
        // 15 - Crouzon, 16 - Moebius, 17 - Rett, 18 - Down, 19 - Williams, 20 - Surdez, 21 - Surdocegueira, 22 - TDAH,
        // 23 - TEA/Autismo, 24 - Transtorno Desintegrativo da Infância, 25 - Transtorno Hipercinético, 
        // 26 - Transtornos Específicos do desenvolvimento de hab, 27 - Transtornos globais de desenvolvimento
    }],
    matriculaLivro:{
        type: String        
    },
    escolaAnterior:{
        type: Schema.Types.ObjectId
    },
    matriculaEscolaAnterior:{
        type: String
    },
    matriculaAtual:{
        type: String
    }
})

mongoose.model('alunos', Aluno)

