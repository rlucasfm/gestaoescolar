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
        type: String 
    },
    cor:{
        type: String        
    },
    situacao:{
        type: String        
    },
    emailAluno:{
        type: String,
    },
    deficiencas:[{
        type: String
    }],
    escolaAnterior:{
        type: Schema.Types.ObjectId
    },
    matriculaEscolaAnterior:{
        type: String
    },
    matriculaAtual:{
        type: String
    },
    nacionalidade: String,
    paisOrigem:{
        type: String,
        default: 'BRASIL'
    },
    uf:{
        type: String
    },
    naturalidade:{
        type: String
    },
    cpf:{
        type: String
    },
    tipoCertidao: String,
    numeroCertidao:{
        type: String
    },
    dataExp:{
        type: Date
    },
    ufCertidao:{
        type: String
    },
    municipioCertidao:{
        type: String
    },
    cartorio:{
        type: String
    },
    rg:{
        type: String
    },
    orgEmissor:{
        type: String
    },
    ufRg:{
        type: String
    },
    dataEmissaoRg:{
        type: String
    },
    certidaoReservista:{
        type: String
    },
    justificativa: String,
    eResponsavel:{
        type: Boolean,
        default: false
    },
    endereco:{
        cep: String,
        endereco: String,
        numero: String,
        bairro: String,
        complemento: String,
        uf: String,
        municipio: String,
        distrito: String,
        telResidencial: String,
        telCelular: String,
        nucleoHabitacional: String,
        tipoMoradia: String,
        moraCompanhia: String
    },
    transporte:{
        transportePublico: String,
        poderPubResp: String,
        transp1: String,
        transp2: String,
        transp3: String,
        recebeEscOutroLugar: String
    },
    pai:{
        nome: String,
        rg: String,
        orgEmissor: String,
        ufRG: String,
        dataEmissao: String,
        cpf: String,
        NIS: String,
        rendaFamilia: Number,
        nacionalidade: String,
        paisOrigem:{
            type: String,
            default: 'BRASIL'
        },        
        ufNasc: String,
        naturalidade: String,        
        escolaridade: String,
        profissao: String,
        localTrabalho: String,
        telefone: String,
        cep: String,
        endereco: String,
        numero: String,
        bairro: String,
        complemento: String,
        uf: String,
        municipio: String,
        distrito: String,
        estadoCivil: String
    },
    mae:{
        nome: String,
        rg: String,
        orgEmissor: String,
        ufRG: String,
        dataEmissao: String,
        cpf: String,
        NIS: String,
        rendaFamilia: Number,
        nacionalidade: String,
        paisOrigem:{
            type: String,
            default: 'BRASIL'
        },        
        ufNasc: String,
        naturalidade: String,
        escolaridade: String,
        profissao: String,
        localTrabalho: String,
        telefone: String,
        cep: String,
        endereco: String,
        numero: String,
        bairro: String,
        complemento: String,
        uf: String,
        municipio: String,
        distrito: String,
        estadoCivil: String
    },
    responsavel:{
        nome: String,
        nascimento: Date,
        parentesco: String,
        rg: String,
        orgEmissor: String,
        ufRG: String,
        dataEmissao: String,
        cpf: String,
        NIS: String,
        rendaFamilia: Number,
        nacionalidade: String,
        paisOrigem:{
            type: String,
            default: 'BRASIL'
        },        
        ufNasc: String,
        naturalidade: String,        
        escolaridade: String,
        profissao: String,
        localTrabalho: String,
        telefone: String,
        cep: String,
        endereco: String,
        numero: String,
        bairro: String,
        complemento: String,
        uf: String,
        municipio: String,
        distrito: String,
        estadoCivil: String,
        nomePai: String,
        nomeMae: String
    }
})

mongoose.model('alunos', Aluno)

