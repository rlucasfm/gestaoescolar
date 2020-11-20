const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Escolas")
const Escola = mongoose.model("escolas")

router.get('/cadastro', (req,res) => {
    res.render('escolas/cadastro')
})

router.get('/busca', (req,res) => {
    res.render('escolas/cadastro')
})

router.get('/editar', (req,res) => {
    res.render('escolas/cadastro')
})

router.get('/deletar', (req,res) => {
    res.render('escolas/cadastro')
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

module.exports = router