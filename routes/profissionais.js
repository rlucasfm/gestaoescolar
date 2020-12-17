const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Profissionais")
const Profissional = mongoose.model("profissionais")
const {accessLevel} = require("../helpers/permissions")

router.get('/', (req,res) => {
    res.redirect("/dashboard")
  })

router.get('/cadastro', (req,res) => {
    res.render('profissionais/cadastro')
  })

router.get('/busca', (req,res) => {
    res.render('profissionais/busca')
})

router.get("/editar/:id", (req, res) => {
  Profissional.findOne({_id:req.params.id}).lean().then((profissional) => {
      res.render("profissionais/editar", {profissional: profissional})
  }).catch((err) => {
      res.send(err)
  })
})

router.post('/busca/filtro', (req, res) => {
  const nome = req.body.nome || ""
  const cpf = req.body.cpf || ""
  const bairro = req.body.bairro || ""
  if(!nome && !cpf && !bairro){
    res.send("Por favor, preencha um campo para buscar o profissional")
  }else{
    Profissional.find({'nome': {$regex: nome, $options: 'i'}, 'cpf': {$regex: cpf}, 'bairro': {$regex: bairro, $options: 'i'}}).lean().then((profissionais) => {
      let stringResponse = ""
      if(profissionais.length){
        for(let i=0; i<profissionais.length; i++){
          stringResponse += "<tr><td><a href='/profissionais/editar/"+profissionais[i]._id+"'>"+profissionais[i].nome+"</a></td><td>"+profissionais[i].cpf+"</td><td>"+profissionais[i].bairro+"</td></tr>"
        }
      }else{
        stringResponse = "Nenhuma profissional encontrado"
      }
      
      res.send(stringResponse)
    })
  }
})

router.post('/cadastro/add', (req,res)=> {
  const novoProfissional = {
    buscaescola: req.body.buscaescola,
    cpf: req.body.cpf,
    nome: req.body.nome,
    matriculaProfissional: req.body.matriculaProfissional,
    pasepprofissional: req.body.pasepprofissional,
    rgprofissional: req.body.rgprofissional,
    orgemissor: req.body.orgemissor,
    uf: req.body.uf,
    dataDoc: req.body.dataDoc,
    sexo: req.body.sexo,
    dataNasc: req.body.dataNasc,
    naturalidade: req.body.naturalidade,
    municipio: req.body.municipio,
    nacionalidade: req.body.nacionalidade,
    pais: req.body.pais,
    cor: req.body.cor,
    estadocivil: req.body.estadocivil,
    conjugue: req.body.conjugue,
    mae: req.body.mae,
    pai: req.body.pai,
    dataadmissao: req.body.dataadmissao,
    datademissao: req.body.datademissao,
    cargo: req.body.cargo,
    chsemanais: req.body.chsemanais,
    necessidade: req.body.necessidade,
    tipoendereco: req.body.tipoendereco,
    nees: req.body.nees,
    inep: req.body.inep,
    financeiro: req.body.financeiro,
    email: req.body.email,
    senha: req.body.senha,
    bloqueio: req.body.bloqueio,
    cep: req.body.cep,
    endereco: req.body.endereco,
    bairro: req.body.bairro,
    numero: req.body.numero,
    complemento: req.body.complemento,
    ufEndereco: req.body.ufEndereco,
    municipiomoradia: req.body.municipiomoradia,
    telfixo: req.body.telfixo,
    telcelular: req.body.telcelular,
    carteira: req.body.carteira,
    serie: req.body.serie,
    emissaodoc: req.body.emissaodoc,
    ufdoc: req.body.ufdoc,
    titulo: req.body.titulo,
    secao: req.body.secao,
    zona: req.body.zona,
    reservista: req.body.reservista,
    passaporte: req.body.passaporte,
    tipocertidao: req.body.tipocertidao,
    certidao: req.body.certidao,
    livro: req.body.livro,
    folha: req.body.folha,
    datacertidao: req.body.datacertidao,
    ufcertidao: req.body.ufcertidao,
    cartorio: req.body.cartorio,
    cargahoria: req.body.cargahoria,
    decreto: req.body.decreto,
    termo: req.body.termo,
    temposervico: req.body.temposervico,
    dataenquadramento: req.body.dataenquadramento,
    area: req.body.area,
    peso: req.body.peso,
    altura: req.body.altura,
    tiposanguineo: req.body.tiposanguineo,
    alergia: req.body.alergia,
    tipomedicamento: req.body.tipomedicamento,
    deficienciafisica: req.body.deficienciafisica,
    fumante: req.body.fumante,
    tomamedicacao: req.body.tomamedicacao,
    banco: req.body.banco,
    agencia: req.body.agencia,
    conta: req.body.conta,
    tipoconta: req.body.tipoconta,
    banco1: req.body.banco1,
    agencia1: req.body.agencia1,
    conta1: req.body.conta1,
    tipoconta1: req.body.tipoconta1,
    observacoes: req.body.observacoes
  }

new Profissional(novoProfissional).save().then(() => {
  req.flash("success_msg", "Profissional cadastrado com sucesso")
  res.send("Cadastro feito com sucesso")
}).catch((err) => {
  req.flash("error_msg", "Houve um erro ao cadastrar a profissional, tente novamente")
  res.send(err)
}) 
})

router.post("/cadastro/edit", (req, res) => {
  const editProfissional = {
    buscaescola: req.body.buscaescola || false,
    cpf: req.body.cpf || "",
    nome: req.body.nome || "",
    matriculaProfissional: req.body.matriculaProfissional || "",
    pasepprofissional: req.body.pasepprofissional || "",
    rgprofissional: req.body.rgprofissional || "",
    orgemissor: req.body.orgemissor || "",
    uf: req.body.uf || "",
    dataDoc: req.body.dataDoc || "",
    sexo: req.body.sexo || "",
    dataNasc: req.body.dataNasc || "",
    naturalidade: req.body.naturalidade || "",
    municipio: req.body.municipio || "",
    nacionalidade: req.body.nacionalidade || "",
    pais: req.body.pais || "",
    cor: req.body.cor || "",
    estadocivil: req.body.estadocivil|| "",
    conjugue: req.body.conjugue || "",
    mae: req.body.mae || "",
    pai: req.body.pai || "",
    dataadmissao: req.body.dataadmissao || "",
    datademissao: req.body.datademissao || "",
    cargo: req.body.cargo || "",
    chsemanais: req.body.chsemanais || "",
    necessidade: req.body.necessidade || "",
    tipoendereco: req.body.tipoendereco || "",
    nees: req.body.nees || false,
    inep: req.body.inep || false,
    financeiro: req.body.financeiro || false,
    email: req.body.email || "",
    senha: req.body.senha || "",
    bloqueio: req.body.bloqueio || false,
    cep: req.body.cep || "",
    endereco: req.body.endereco || "",
    bairro: req.body.bairro || "",
    numero: req.body.numero || "",
    complemento: req.body.complemento || "",
    ufEndereco: req.body.ufEndereco || "",
    municipiomoradia: req.body.municipiomoradia || "",
    telfixo: req.body.telfixo || "",
    telcelular: req.body.telcelular || "",
    carteira: req.body.carteira || "",
    serie: req.body.serie || "",
    emissaodoc: req.body.emissaodoc || "",
    ufdoc: req.body.ufdoc || "",
    titulo: req.body.titulo || "",
    secao: req.body.secao || "",
    zona: req.body.zona || "",
    reservista: req.body.reservista || "",
    passaporte: req.body.passaporte || "",
    tipocertidao: req.body.tipocertidao || "",
    certidao: req.body.certidao || "",
    livro: req.body.livro || "",
    folha: req.body.folha || "",
    datacertidao: req.body.datacertidao || "",
    ufcertidao: req.body.ufcertidao || "",
    cartorio: req.body.cartorio || "",
    cargahoria: req.body.cargahoria || "",
    decreto: req.body.decreto || "",
    termo: req.body.termo || "",
    temposervico: req.body.temposervico || "",
    dataenquadramento: req.body.dataenquadramento || "",
    area: req.body.area || "",
    peso: req.body.peso || "",
    altura: req.body.altura || "",
    tiposanguineo: req.body.tiposanguineo || "",
    alergia: req.body.alergia || "",
    tipomedicamento: req.body.tipomedicamento || "",
    deficienciafisica: req.body.deficienciafisica || false,
    fumante: req.body.fumante || false,
    tomamedicacao: req.body.tomamedicacao || false,
    banco: req.body.banco || "",
    agencia: req.body.agencia || "",
    conta: req.body.conta || "",
    tipoconta: req.body.tipoconta || "",
    banco1: req.body.banco1 || "",
    agencia1: req.body.agencia1 || "",
    conta1: req.body.conta1 || "",
    tipoconta1: req.body.tipoconta1 || "",
    observacoes: req.body.observacoes || ""    
  }
  
  Profissional.findByIdAndUpdate(req.body.idProf, editProfissional, {'runValidators': true}, (err) => {
    if(err){
      res.send(err)
    }else{
      res.send("Edição feita com sucesso")
    }
  })
})

module.exports = router