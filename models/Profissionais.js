const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Profissional = new Schema({
    buscaescola:{
        type: Boolean,
        default: false
    },
    cpf:{
        type: String,
    },
    nome:{
        type: String,
    },
    matriculaProfissional:{
        type: String,
    },
    pasepprofissional:{
        type: String,
    },
    rgprofissional:{
        type: String,
    },
    orgemissor:{
        type: String,
    },
    uf:{
        type: String,
    },
    dataDoc:{
        type: Date,
    },
    sexo:{
        type: String,
    },
    dataNasc:{
        type: Date,
    },
    naturalidade:{
        type: String,
    },
    municipio:{
        type: String,
    },
    nacionalidade:{
        type: String,
    },
    pais:{
        type: String,
    },
    cor:{
        type: String,
    },
    estadocivil:{
        type: String,
    },
    conjugue:{
        type: String,
    },
    mae:{
        type: String,
    },
    pai:{
        type: String,
    },
    dataadmissao:{
        type: Date,
    },
    datademissao:{
        type: Date,
    },
    cargo:{
        type: String,
    },
    chsemanais:{
        type: String,
    },
    necessidade:{
        type: String,
    },
    tipoendereco:{
        type: String,
    },
    nees:{
        type: Boolean,
        default: false
    },
    inep:{
        type: Boolean,
        default: false
    },
    financeiro:{
        type: Boolean,
        default: false
    },
    email:{
        type: String,
    },
    senha:{
        type: String,
    },
    bloqueio:{
        type: Boolean,
        default: false
    },
    cep:{
        type: String,
    },
    endereco:{
        type: String,
    },
    bairro:{
        type: String,
    },
    numero:{
        type: String,
    },
    complemento:{
        type: String,
    },
    ufEndereco:{
        type: String,
    },
    municipiomoradia:{
        type: String,
    },
    telfixo:{
        type: String,
    },
    telcelular:{
        type: String,
    },
    carteira:{
        type: String,
    },
    serie:{
        type: String,
    },
    emissaodoc:{
        type: Date,
    },
    ufdoc:{
        type: String,
    },
    titulo:{
        type: String,
    },
    secao:{
        type: String,
    },
    zona:{
        type: String,
    },
    reservista:{
        type: String,
    },
    passaporte:{
        type: String,
    },
    tipocertidao:{
        type: String,
    },
    certidao:{
        type: String,
    },
    livro:{
        type: String,
    },
    folha:{
        type: String,
    },
    datacertidao:{
        type: Date,
    },
    ufcertidao:{
        type: String,
    },
    cartorio:{
        type: String,
    },
    cargahoria:{
        type: String,
    },
    decreto:{
        type: String,
    },
    termo:{
        type: String,
    },
    temposervico:{
        type: String,
    },
    dataenquadramento:{
        type: Date,
    },
    area:{
        type: String,
    },
    peso:{
        type: String,
    },
    altura:{
        type: String,
    },
    tiposanguineo:{
        type: String,
    },
    alergia:{
        type: String,
    },
    tipomedicamento:{
        type: String,
    },
    deficienciafisica:{
        type: Boolean,
        default: false
    },
    fumante:{
        type: Boolean,
        default: false
    },
    tomamedicacao:{
        type: Boolean,
        default: false
    },
    banco:{
        type: String,
    },
    agencia:{
        type: String,
    },
    conta:{
        type: String,
    },
    tipoconta:{
        type: String,
    },
    banco1:{
        type: String,
    },
    agencia1:{
        type: String,
    },
    conta1:{
        type: String,
    },
    tipoconta1:{
        type: String,
    },
    observacoes:{
        type: String,
    }
})

mongoose.model('profissionais', Profissional)