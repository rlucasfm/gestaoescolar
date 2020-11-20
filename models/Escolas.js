const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Escola = new Schema({
    pais:{
        type: String,
    },
    ufEscola:{
        type: String,
    },
    regiaoAdministrativa:{
        type: String,
    },
    municipio:{
        type: String,
    },
    descricao:{
        type: String,
    },
    apelido:{
        type: String,
    },
    orgao:{
        type: String,
    },
    orgaoregional:{
        type: String,
    },
    cep:{
        type: Number,
    },
    endereco:{
        type: String,
    },
    numero:{
        type: String,
    },
    bairro:{
        type: String,
    },
    complemento:{
        type: String,
    },
    tipodezona:{
        type: String,
    },
    ufINEP:{
        type: String,
    },
    municipioINEP:{
        type: String,
    },
    distritoINEP:{
        type: String,
    },
    telefone:{
        type: Number,
    },
    celular:{
        type: Number,
    },
    email:{
        type: String,
    },
    situacao:{
        type: String,

    },
    formaocupacao:{
        type: String,
    },
    regulamentacao:{
        type: String,
    },
    sistemaimplantado:{
        type: String,
    },
    localarea:{
        type: String,
    },
    nucleohabitacional:{
        type: String,
    },
    organizacaoescolar:{
        type: String,
    },
    dependenciaadm:{
        type: String,
    },
    turnosoferecidos:{
        type: String,
    },
    cnpj:{
        type: Number,
    },
    atocriacao:{
        type: String,
    },
    livrofolha:{
        type: String,
    },
    registromec:{
        type: String,
    },
    dataregistro:{
        type: Date,
    },
    site:{
        type: String,
    },
    entidademantenedora:{
        type: String,
    },
    numerosalas:{
        type: Number,
    },
    numeropavimentos:{
        type: String,
    },
    areatotal:{
        type: String,
    },
    capacidadealunos:{
        type: Number,
    },
    latitude:{
        type: String,
    },
    longitude:{
        type: String,
    },
    cpfdiretor:{
        type: Number,
    },
    diretor:{
        type: String,
    },
    tratamento:{
        type: String,
    },
    portariadiretor:{
        type: String,
    },
    coordenadorpedag:{
        type: String,
    },
    tratamentocoordenadorpedag:{
        type: String,
    },
    portariacoordenadorpedag:{
        type: String,
    },
    coordenadorsecret:{
        type: String,
    },
    tratamentocoordenadorsecret:{
        type: String,
    },
    portariacoordenadorsecret:{
        type: String,
    }
})

mongoose.model('escolas', Escola)