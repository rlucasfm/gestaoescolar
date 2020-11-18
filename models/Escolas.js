const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Escola = new Schema({
    pais:{
        type: String,
        required: true
    },
    ufEscola:{
        type: String,
        required: true
    },
    regiaoAdministrativa:{
        type: String,
        required: true
    },
    municipio:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    apelido:{
        type: String,
        required: true
    },
    orgao:{
        type: String,
        required: false
    },
    orgaoregional:{
        type: String,
        required: true
    },
    cep:{
        type: Number,
        required: true
    },
    endereco:{
        type: String,
        required: true
    },
    numero:{
        type: String,
        required: false
    },
    bairro:{
        type: String,
        required: true
    },
    complemento:{
        type: String,
        require: false
    },
    tipodezona:{
        type: String,
        required: true
    },
    ufINEP:{
        type: String,
        required: true
    },
    municipioINEP:{
        type: String,
        required: true
    },
    distritoINEP:{
        type: String,
        required: true
    },
    telefone:{
        type: Number,
        required: true
    },
    celular:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    situacao:{
        type: String,
        required: true
    },
    formaocupacao:{
        type: String,
        required: true
    },
    regulamentacao:{
        type: String,
        required: true
    },
    sistemaimplantado:{
        type: String,
        required: true
    },
    localarea:{
        type: String,
        required: true
    },
    nucleohabitacional:{
        type: String,
        required: false
    },
    organizacaoescolar:{
        type: String,
        required: true
    },
    dependenciaadm:{
        type: String,
        required: true
    },
    turnosoferecidos:{
        type: String,
        required: true
    },
    cnpj:{
        type: Number,
        required: true
    },
    atocriacao:{
        type: String,
        required: false
    },
    livrofolha:{
        type: String,
        required: false
    },
    registromec:{
        type: String,
        required: false
    },
    dataregistro:{
        type: Date,
        required: false
    },
    site:{
        type: String,
        required: false
    },
    entidademantenedora:{
        type: String,
        required: false
    },
    numerosalas:{
        type: Number,
        required: false
    },
    numeropavimentos:{
        type: String,
        required: false
    },
    areatotal:{
        type: String,
        required: false
    },
    capacidadealunos:{
        type: Number,
        required: false
    },
    latitude:{
        type: String,
        required: false
    },
    longitude:{
        type: String,
        required: false
    },
    cpfdiretor:{
        type: Number,
        required: false
    },
    diretor:{
        type: String,
        required: true
    },
    tratamento:{
        type: String,
        required: false
    },
    portariadiretor:{
        type: String,
        required: false
    },
    coordenadorpedag:{
        type: String,
        required: false
    },
    tratamentocoordenadorpedag:{
        type: String,
        required: false
    },
    portariacoordenadorpedag:{
        type: String,
        required: false
    },
    coordenadorsecret:{
        type: String,
        required: false
    },
    tratamentocoordenadorsecret:{
        type: String,
        required: false
    },
    portariacoordenadorsecret:{
        type: String,
        required: false
    },
})

mongoose.model('escolas', Escola)