const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Escolas")
const Escola = mongoose.model("escolas")
const {accessLevel} = require("../helpers/permissions")

router.get('/cadastro', (req,res) => {
    res.render('escolas/cadastro')
})

router.get('/busca', (req,res) => {
    res.render('escolas/busca')
})

router.get('/editar', (req,res) => {
    res.render('escolas/cadastro')
})

router.get("/edit/:id", (req, res) => {
  Escola.findOne({_id:req.params.id}).lean().then((escola) => {
      res.render("escolas/editescola", {escola: escola})
  }).catch((err) => {
      req.flash("error_msg", "Esta escola não existe")
      res.redirect("/escolas/index")
  })
})

router.post('/busca/filtro', (req, res) => {
    const descricao = req.body.descricao || ""
    const cnpj = req.body.cnpj || ""
    const apelido = req.body.apelido || ""
    if(!descricao && !cnpj && !apelido){
      res.send("Por favor, preencha um campo para buscar a escola")
    }else{
      Escola.find({'descricao': {$regex: descricao, $options: 'i'}, 'cnpj': {$regex: cnpj, $options: 'i'}, 'apelido': {$regex: apelido, $options: 'i'}}).lean().then((escolas) => {
        let stringResponse = ""
        if(escolas.length){
          for(let i=0; i<escolas.length; i++){
            stringResponse += "<tr><td><a href='/escolas/editescola/"+escolas[i]._id+"'>"+escolas[i].descricao+"</a></td><td>"+escolas[i].cnpj+"</td><td>"+escolas[i].apelido+"</td></tr>"
          }
        }else{
          stringResponse = "Nenhuma escola encontrada"
        }
        
        res.send(stringResponse)
      })
    }
  })

router.post("/escolas/edit", (req, res) => {

  var erros = []

  if(!req.body.descricao || typeof req.body.descricao == undefined || req.body.descricao == null){
      erros.push({texto: "Descricao inválida"})
  }

  if(!req.body.endereco || typeof req.body.endereco == undefined || req.body.endereco == null){
      erros.push({texto: "Endereço inválido"})
  }

  if(req.body.descricao.length <= 2){
      erros.push({texto: "Descrição é muito pequena"})
  }

  if(erros.length > 0){
      res.render("/escolas/cadastro", {erros: erros})
  }else{

  Escola.findOne({_id: req.body.id}).then((escola) => {
      escola.pais = req.body.pais
      escola.ufEscola = req.body.ufEscola
      escola.regiaoAdministrativa = req.body.regiaoAdministrativa
      escola.municipio = req.body.municipio
      escola.descricao = req.body.descricao
      escola.apelido = req.body.apelido
      escola.orgao = req.body.orgao
      escola.orgaoregional = req.body.orgaoregional
      escola.cep = req.body.cep
      escola.endereco = req.body.endereco
      escola.numero = req.body.numero
      escola.bairro = req.body.bairro
      escola.complemento = req.body.complemento
      escola.tipodezona = req.body.tipodezona
      escola.ufINEP = req.body.ufINEP
      escola.municipioINEP = req.body.municipioINEP
      escola.distritoINEP = req.body.distritoINEP
      escola.telefone = req.body.telefone
      escola.celular = req.body.celular
      escola.email = req.body.email
      escola.situacao = req.body.situacao
      escola.formaocupacao = req.body.formaocupacao
      escola.regulamentacao = req.body.regulamentacao
      escola.sistemaimplantado = req.body.sistemaimplantado
      escola.localarea = req.body.localarea
      escola.nucleohabitacional = req.body.nucleohabitacional
      escola.organizacaoescolar = req.body.organizacaoescolar
      escola.dependenciaadm = req.body.dependenciaadm
      escola.turnosoferecidos = req.body.turnosoferecidos
      escola.cnpj = req.body.cnpj
      escola.atocriacao = req.body.atocriacao
      escola.livrofolha = req.body.livrofolha
      escola.registromec = req.body.registromec
      escola.dataregistro = req.body.dataregistro
      escola.site = req.body.site
      escola.entidademantenedora = req.body.entidademantenedora
      escola.numerosalas = req.body.numerosalas
      escola.numeropavimentos = req.body.numeropavimentos
      escola.areatotal = req.body.areatotal
      escola.capacidadealunos = req.body.capacidadealunos
      escola.latitude = req.body.latitude
      escola.longitude = req.body.longitude
      escola.cpfdiretor = req.body.cpfdiretor
      escola.diretor = req.body.diretor
      escola.tratamento = req.body.tratamento
      escola.portariadiretor = req.body.portariadiretor
      escola.coordenadorpedag = req.body.coordenadorpedag
      escola.tratamentocoordenadorpedag = req.body.tratamentocoordenadorpedag
      escola.portariacoordenadorpedag = req.body.portariacoordenadorpedag
      escola.coordenadorsecret = req.body.coordenadorsecret
      escola.tratamentocoordenadorsecret = req.body.tratamentocoordenadorsecret
      escola.portariacoordenadorsecret = req.body.portariacoordenadorsecret

      escola.save().then(() => {
          req.flash("success_msg", "Escola editada com sucesso!")
          res.redirect("/escolas/cadatro")
      }).catch((err) => {
          req.flash("error_msg", "Houve um erro interno ao salvar a edição da escola")
          res.redirect("/escolas/cadastro")
      })
  }).catch((err) => {
      req.flash("error_msg", "Houve um erro ao editar a escola")
      res.redirect("/escolas/cadastro")
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

module.exports = router