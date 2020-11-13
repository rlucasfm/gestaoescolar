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
        type: String,
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
    },
    emailAluno:{
        type: String,
    },
    deficiencas:[{
        type: Number
        // 0 - Altas Habilidades/Superdotação, 1 - Baixa visão, 2 - Cegueira, 3 - Condutas Típicas, 4 - Deficiência Auditiva,
        // 5 - Deficiência física, 6 - Deficiência Intelectual, 7 - Deficiência multipla, 8 - Deficiencia visual, 9 - Dislexia
        // 10 - Distúrbios alimentares, 11 - Outras, 12 - Paralisia Cerebral, 13 - Sindrome Asperger,
        // 14 - Crouzon, 15 - Moebius, 16 - Rett, 17 - Down, 18 - Williams, 19 - Surdez, 20 - Surdocegueira, 21 - TDAH,
        // 22 - TEA/Autismo, 23 - Transtorno Desintegrativo da Infância, 24 - Transtorno Hipercinético, 
        // 25 - Transtornos Específicos do desenvolvimento de hab, 26 - Transtornos globais de desenvolvimento
        // 100 - Sem necessidade
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
    nacionalidade:{
        type: Number,
        // 0 - Brasileira, 1 - Brasileiro Naturalizado, 2 - Estrangeiro
        default: 0
    },
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
    tipoCertidao:{
        type: Number
        // 0 - Não consta, 1 - Nascimento, 2 - Casamento
    },
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
    justificativa:{
        type: Number,
        // 0 - Documento OK, 1 - Não possui os documentos pessoais solicitados, 2 - A escola não dispõe ou não recebeu os documentos
        default: 0
    },
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
        nucleoHabitacional:{
            type: Number,
            // 0 - Zona urbana, 1 - Zona rural
            default: 0
        },
        tipoMoradia:{
            type: Number
            // 0 - Aluguel, 1 - Cedida, 2 - Própria, 3 - Opção
        },
        moraCompanhia:{
            type: Number,
            // 0 - Familiares, 1 - Somente Pai, 2 - Somente mãe, 3 - Outras pessoas, 4 - Pai e mãe
            default: 0
        }
    },
    transporte:{
        transportePublico: Boolean, // false - não utiliza, true - utiliza
        poderPubResp:{
            type: Number,
            // 0 - Municipal, 1 - Estadual, 2 - Nenhum
            default: 0
        },
        transp1:{
            type: Number,
            // 0 - Nenhum
            // 1 - Rodoviário - Onibus, 2 - Rod - Microonibus, 3 - Rod - Vans/Kombi, 4 - Rod - Bicicleta, 5 - Rod - Tração Animal
            // 6 - Rod - Outros, 7 - Aquaviário - Capacidade até 5, 8 - Aqua - 5 a 15, 9 - Aqua - 15 a 35, 10 - Aqua - Mais que 35
            default: 0
        },
        transp2:{
            type: Number,
            // 0 - Nenhum
            // 1 - Rodoviário - Onibus, 2 - Rod - Microonibus, 3 - Rod - Vans/Kombi, 4 - Rod - Bicicleta, 5 - Rod - Tração Animal
            // 6 - Rod - Outros, 7 - Aquaviário - Capacidade até 5, 8 - Aqua - 5 a 15, 9 - Aqua - 15 a 35, 10 - Aqua - Mais que 35
            default: 0
        },
        transp3:{
            type: Number,
            // 0 - Nenhum
            // 1 - Rodoviário - Onibus, 2 - Rod - Microonibus, 3 - Rod - Vans/Kombi, 4 - Rod - Bicicleta, 5 - Rod - Tração Animal
            // 6 - Rod - Outros, 7 - Aquaviário - Capacidade até 5, 8 - Aqua - 5 a 15, 9 - Aqua - 15 a 35, 10 - Aqua - Mais que 35
            default: 0
        },
        recebeEscOutroLugar:{
            type: Number,
            // 0 - Não recebe, 1 - Hospital, 2 - Domicílio
            default: 0 
        }
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
        nacionalidade:{
            type: Number,
            // 0 - Brasileira, 1 - Brasileiro Naturalizado, 2 - Estrangeiro
            default: 0
        },
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
        estadoCivil:{
            type: Number
            // 0 - Casado, 1 - Separado, 2 - Solteiro, 3 - Juntos, 4 - Viuvo, 5 - Outros
        }
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
        nacionalidade:{
            type: Number,
            // 0 - Brasileira, 1 - Brasileiro Naturalizado, 2 - Estrangeiro
            default: 0
        },
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
        estadoCivil:{
            type: Number
            // 0 - Casado, 1 - Separado, 2 - Solteiro, 3 - Juntos, 4 - Viuvo, 5 - Outros
        }
    },
    responsavel:{
        nome: String,
        rg: String,
        orgEmissor: String,
        ufRG: String,
        dataEmissao: String,
        cpf: String,
        NIS: String,
        rendaFamilia: Number,
        nacionalidade:{
            type: Number,
            // 0 - Brasileira, 1 - Brasileiro Naturalizado, 2 - Estrangeiro
            default: 0
        },
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
        estadoCivil:{
            type: Number
            // 0 - Casado, 1 - Separado, 2 - Solteiro, 3 - Juntos, 4 - Viuvo, 5 - Outros
        },
        nomePai: String,
        nomeMae: String
    }
})

mongoose.model('alunos', Aluno)

