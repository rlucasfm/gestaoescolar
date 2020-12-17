const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Escolas")
const Escola = mongoose.model("escolas")
const {accessLevel} = require("../helpers/permissions")

router.get('/', (req,res) => {
  res.redirect("/dashboard")
})

router.get('/cadastro', (req,res) => {
  res.render('escolas/cadastro')
})

router.get('/busca', (req,res) => {
    res.render('escolas/busca')
})

router.get("/editar/:id", (req, res) => {
  Escola.findOne({_id:req.params.id}).lean().then((escola) => {
      res.render("escolas/editar", {escola: escola})
  }).catch((err) => {
      res.send(err)
  })
})

router.post('/busca/filtro', (req, res) => {
    const descricao = req.body.descricao || ""
    const cnpj = req.body.cnpj || ""
    const diretor = req.body.diretor || ""
    if(!descricao && !cnpj && !diretor){
      res.send("Por favor, preencha um campo para buscar a escola")
    }else{
      Escola.find({'descricao': {$regex: descricao, $options: 'i'}, 'cnpj': {$regex: cnpj}, 'diretor': {$regex: diretor, $options: 'i'}}).lean().then((escolas) => {
        let stringResponse = ""
        if(escolas.length){
          for(let i=0; i<escolas.length; i++){
            stringResponse += "<tr><td><a href='/escolas/editar/"+escolas[i]._id+"'>"+escolas[i].descricao+"</a></td><td>"+escolas[i].bairro+"</td><td>"+escolas[i].cnpj+"</td><td>"+escolas[i].diretor+"</td></tr>"
          }
        }else{
          stringResponse = "Nenhuma escola encontrada"
        }
        
        res.send(stringResponse)
      })
    }
  })

router.post("/deletar", (req, res) => {
  Escola.remove({_id: req.body.id}).then(() => {
      req.flash("success_msg", "Escola deletada com sucesso!")
      res.redirect("/escolas/index")
  }).catch((err) =>{
      req.flash("error_msg", "Houve um erro ao deletar a escola!")
      res.redirect("/escolas/index")
  })
})

router.post('/cadastro/add', (req,res)=> {
    const novoEscola = {
      pais: req.body.pais,
      ufEscola: req.body.ufEscola,
      regiaoAdministrativa: req.body.regiaoAdministrativa,
      municipio: req.body.municipio,
      descricao: req.body.descricao,
      apelido: req.body.apelido,
      orgao: req.body.orgao,
      orgaoregional: req.body.orgaoregional,
      cep: req.body.cep,
      endereco: req.body.endereco,
      numero: req.body.numero,
      bairro: req.body.bairro,
      complemento: req.body.complemento,
      tipodezona: req.body.tipodezona,
      ufINEP: req.body.ufINEP,
      municipioINEP: req.body.municipioINEP,
      distritoINEP: req.body.distritoINEP,
      telefone: req.body.telefone,
      celular: req.body.celular,
      email: req.body.email,
      situacao: req.body.situacao,
      formaocupacao: req.body.formaocupacao,
      regulamentacao: req.body.regulamentacao,
      sistemaimplantado: req.body.sistemaimplantado,
      localarea: req.body.localarea,
      nucleohabitacional: req.body.nucleohabitacional,
      organizacaoescolar: req.body.organizacaoescolar,
      dependenciaadm: req.body.dependenciaadm,
      turnosoferecidos: req.body.turnosoferecidos,
      cnpj: req.body.cnpj,
      atocriacao: req.body.atocriacao,
      livrofolha: req.body.livrofolha,
      registromec: req.body.registromec,
      dataregistro: req.body.dataregistro,
      site: req.body.site,
      entidademantenedora: req.body.entidademantenedora,
      numerosalas: req.body.numerosalas,
      numeropavimentos: req.body.numeropavimentos,
      areatotal: req.body.areatotal,
      capacidadealunos: req.body.capacidadealunos,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      cpfdiretor: req.body.cpfdiretor,
      diretor: req.body.diretor,
      tratamento: req.body.tratamento,
      portariadiretor: req.body.portariadiretor,
      coordenadorpedag: req.body.coordenadorpedag,
      tratamentocoordenadorpedag: req.body.tratamentocoordenadorpedag,
      portariacoordenadorpedag: req.body.portariacoordenadorpedag,
      coordenadorsecret: req.body.coordenadorsecret,
      tratamentocoordenadorsecret: req.body.tratamentocoordenadorsecret,
      portariacoordenadorsecret: req.body.portariacoordenadorsecret
    }
  new Escola(novoEscola).save().then(() => {
    req.flash("success_msg", "Escola cadastrada com sucesso")
    res.send("Cadastro feito com sucesso")
  }).catch((err) => {
    req.flash("error_msg", "Houve um erro ao cadastrar a escola, tente novamente")
    res.send(err)
  }) 
})

router.post("/cadastro/edit", (req, res) => {
  const editEscola = {
    pais: req.body.pais || "",
    ufEscola: req.body.ufEscola || "",
    regiaoAdministrativa: req.body.regiaoAdministrativa || "",
    municipio: req.body.municipio || "",
    descricao: req.body.descricao || "",
    apelido: req.body.apelido || "",
    orgao: req.body.orgao || "",
    orgaoregional: req.body.orgaoregional || "",
    cep: req.body.cep || "",
    endereco: req.body.endereco || "",
    numero: req.body.numero || "",
    bairro: req.body.bairro || "",
    complemento: req.body.complemento || "",
    tipodezona: req.body.tipodezona || "",
    ufINEP: req.body.ufINEP || "",
    municipioINEP: req.body.municipioINEP || "",
    distritoINEP: req.body.distritoINEP || "",
    telefone: req.body.telefone || "",
    celular: req.body.celular || "",
    email: req.body.email || "",
    situacao: req.body.situacao || "",
    formaocupacao: req.body.formaocupacao || "",
    regulamentacao: req.body.regulamentacao || "",
    sistemaimplantado: req.body.sistemaimplantado || "",
    localarea: req.body.localarea || "",
    nucleohabitacional: req.body.nucleohabitacional || "",
    organizacaoescolar: req.body.organizacaoescolar || "",
    dependenciaadm: req.body.dependenciaadm || "",
    turnosoferecidos: req.body.turnosoferecidos || "",
    cnpj: req.body.cnpj || "",
    atocriacao: req.body.atocriacao || "",
    livrofolha: req.body.livrofolha || "",
    registromec: req.body.registromec || "",
    dataregistro: req.body.dataregistro || "",
    site: req.body.site || "",
    entidademantenedora: req.body.entidademantenedora || "",
    numerosalas: req.body.numerosalas || "",
    numeropavimentos: req.body.numeropavimentos || "",
    areatotal: req.body.areatotal || "",
    capacidadealunos: req.body.capacidadealunos || "",
    latitude: req.body.latitude || "",
    longitude: req.body.longitude || "",
    cpfdiretor: req.body.cpfdiretor || "",
    diretor: req.body.diretor || "",
    tratamento: req.body.tratamento || "",
    portariadiretor: req.body.portariadiretor || "",
    coordenadorpedag: req.body.coordenadorpedag || "",
    tratamentocoordenadorpedag: req.body.tratamentocoordenadorpedag || "",
    portariacoordenadorpedag: req.body.portariacoordenadorpedag || "",
    coordenadorsecret: req.body.coordenadorsecret || "",
    tratamentocoordenadorsecret: req.body.tratamentocoordenadorsecret || "",
    portariacoordenadorsecret: req.body.portariacoordenadorsecret || ""

  }
  Escola.findByIdAndUpdate(req.body.id, editEscola, {'runValidators': true}, (err) => {
    if(err){
      res.send(err)
    }else{
      res.send("Edição feita com sucesso")
    }
  })
})

module.exports = router