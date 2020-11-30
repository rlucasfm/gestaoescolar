const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Alunos")
const Aluno = mongoose.model("alunos")
require("../models/Escolas")
const Escola = mongoose.model("escolas")
const {accessLevel} = require("../helpers/permissions")

router.get('/cadastro', (req,res) => {
    Escola.find().sort({apelido: 'desc'}).lean().then((escolas) => {
      res.render('alunos/cadastro', {escolas: escolas})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as escolas")
        res.redirect("/dashboard")
    })
    
})

router.get('/busca', (req,res) => {    
    accessLevel(req, res, 2, () => {       
        res.render('alunos/busca')
    })
})

router.get('/editar', (req,res) => {
    res.render('alunos/editar')
})

router.get('/deletar', (req,res) => {
    res.render('alunos/deletar')
})

router.post('/busca/filtro', (req, res) => {
  const nomeAluno = req.body.nomeAluno || ""
  const cpfAluno = req.body.cpfAluno || ""
  const nomeMae = req.body.nomeMae || ""
  if(!nomeAluno && !cpfAluno && !nomeMae){
    res.send("Por favor, preencha um campo para buscar o aluno")
  }else{
    Aluno.find({'nome': {$regex: nomeAluno, $options: 'i'}, 'cpf': {$regex: cpfAluno, $options: 'i'}, 'mae.nome': {$regex: nomeMae, $options: 'i'}}).lean().then((alunos) => {
      let stringResponse = ""
      if(alunos.length){
        for(let i=0; i<alunos.length; i++){
          stringResponse += "<tr><td><a href='#'>"+alunos[i].nome+"</a></td><td>"+alunos[i].nascimento.getDate()+"/"+alunos[i].nascimento.getMonth()+"/"+alunos[i].nascimento.getFullYear()+"</td><td>"+alunos[i].mae.nome+"</td><td>"+alunos[i].cpf+"</td></tr>"
        }
      }else{
        stringResponse = "Nenhum aluno encontrado"
      }
      
      res.send(stringResponse)
    })
  }
})

router.post('/cadastro/add', (req,res)=> {
  let defsAluno = []
  defsAluno.push(req.body.deficienciaAluno)
  defsAluno.push(req.body.deficienciaAluno2)
  defsAluno.push(req.body.deficienciaAluno3)
  const novoAluno = {
        nome: req.body.nomeAluno || "",
        nascimento: req.body.dataNascAluno || "",
        NIS: req.body.NISAluno || "",
        IDCenso: req.body.idCensoAluno || "",
        sexo: req.body.sexoAluno || "",
        cor: req.body.corAluno || "",
        situacao: req.body.situacaoAluno || "",
        emailAluno: req.body.emailAluno || "",        
        deficiencas : defsAluno || "",
        escolaAnterior : req.body.escolaAnterior || "",
        matriculaEscolaAnterior : req.body.matricAntAluno || "",
        matriculaAtual : req.body.matricAluno || "",
        nacionalidade : req.body.nacionalidadeAluno || "",
        paisOrigem : req.body.paisAluno || "",
        uf : req.body.ufAluno || "",
        naturalidade : req.body.naturalidadeAluno || "",
        cpf : req.body.cpfAluno || "",
        tipoCertidao : req.body.tipoDoc || "",
        numeroCertidao : req.body.numeroDoc || "",
        ufCertidao : req.body.ufDoc || "",
        dataExp : req.body.dataDoc || "",
        municipioCertidao : req.body.municipioDoc || "",
        cartorio : req.body.cartorioDoc || "",
        rg : req.body.rgDoc || "",
        orgEmissor : req.body.emissorRg || "",
        ufRg : req.body.ufRg || "",
        dataEmissaoRg : req.body.dataEmissaoRg || "",
        certidaoReservista : req.body.certReserv || "",
        justificativa : req.body.justifDoc || "",
        eResponsavel : req.body.eResp || false,
        endereco: {
          cep: req.body.cepEnd || "",
          endereco: req.body.endereco || "",
          numero: req.body.numEnd || "",
          bairro: req.body.bairroEnd || "",
          complemento: req.body.complementoEnd || "",
          uf: req.body.ufEnd || "",
          municipio: req.body.municipioEnd || "",
          distrito: req.body.distritoEnd || "",
          telResidencial: req.body.telresEnd || "",
          telCelular: req.body.celEnd || "",
          nucleoHabitacional: req.body.nucleohab || "",
          tipoMoradia: req.body.tipomoradia || "",
          moraCompanhia: req.body.companhiaMoradia || ""
        },
        transporte: {
          transportePublico: req.body.transPub || "",
          poderPubResp: req.body.transResp || "",
          transp1: req.body.trans1 || "",
          transp2: req.body.trans2 || "",
          transp3: req.body.trans3 || "",
          recebeEscOutroLugar: req.body.escoutroLocal || ""
        },
        pai:{
          nome: req.body.nomePai || "",
          rg: req.body.rgPai || "",
          orgEmissor: req.body.emissorRgPai || "",
          ufRG: req.body.ufrgPai || "",
          dataEmissao: req.body.dataEmissRgPai || "",
          cpf: req.body.cpfPai || "",
          NIS: req.body.nisPai || "",
          rendaFamilia: req.body.rendaPai || "",
          nacionalidade: req.body.nacionalidadePai || "",
          paisOrigem: req.body.paisPai || "",        
          ufNasc: req.body.ufnascPai || "",
          naturalidade: req.body.naturalidadePai || "",        
          escolaridade: req.body.escolaridadePai || "",
          profissao: req.body.profPai || "",
          localTrabalho: req.body.localtrabPai || "",
          telefone: req.body.telPai || "",
          cep: req.body.cepPai || "",
          endereco: req.body.enderecoPai || "",
          numero: req.body.numPai || "",
          bairro: req.body.bairroPai || "",
          complemento: req.body.complementoPai || "",
          uf: req.body.ufPai || "",
          municipio: req.body.municipioPai || "",
          distrito: req.body.distritoPai || "",
          estadoCivil: req.body.estadocivilPai || ""
        },
        mae:{
          nome: req.body.nomeMae || "",
          rg: req.body.rgMae || "",
          orgEmissor: req.body.emissorRgMae || "",
          ufRG: req.body.ufrgMae || "",
          dataEmissao: req.body.dataEmissRgMae || "",
          cpf: req.body.cpfMae || "",
          NIS: req.body.nisMae || "",
          rendaFamilia: req.body.rendaMae || "",
          nacionalidade: req.body.nacionalidadeMae || "",
          paisOrigem: req.body.paisMae || "",        
          ufNasc: req.body.ufnascMae || "",
          naturalidade: req.body.naturalidadeMae || "",
          escolaridade: req.body.escolaridadeMae || "",
          profissao: req.body.profMae || "",
          localTrabalho: req.body.localtrabMae || "",
          telefone: req.body.telMae || "",
          cep: req.body.cepMae || "",
          endereco: req.body.enderecoMae || "",
          numero: req.body.numMae || "",
          bairro: req.body.bairroMae || "",
          complemento: req.body.complementoMae || "",
          uf: req.body.ufMae || "",
          municipio: req.body.municipioMae || "",
          distrito: req.body.distritoMae || "",
          estadoCivil: req.body.estadocivilMae || ""
        },
        responsavel:{
          nome: req.body.nomeResp || "",
          nascimento: req.body.nascResp || "",
          parentesco: req.body.parentescoResp || "",
          rg: req.body.rgResp || "",
          orgEmissor: req.body.emissorRgResp || "",
          ufRG: req.body.ufrgResp || "",
          dataEmissao: req.body.dataEmissRgResp || "",
          cpf: req.body.cpfResp || "",
          NIS: req.body.nisResp || "",
          rendaFamilia: req.body.rendaResp || "",
          nacionalidade: req.body.nacionalidadeResp || "",
          paisOrigem: req.body.paisResp || "",        
          ufNasc: req.body.ufnascResp || "",
          naturalidade: req.body.naturalidadeResp || "",        
          escolaridade: req.body.escolaridadeResp || "",
          profissao: req.body.profResp || "",
          localTrabalho: req.body.localtrabResp || "",
          telefone: req.body.telResp || "",
          cep: req.body.cepResp || "",
          endereco: req.body.enderecoResp || "",
          numero: req.body.numResp || "",
          bairro: req.body.bairroResp || "",
          complemento: req.body.complementoResp || "",
          uf: req.body.ufResp || "",
          municipio: req.body.municipioResp || "",
          distrito: req.body.distritoResp || "",
          estadoCivil: req.body.estadocivilResp || "",
          nomePai: req.body.nomePaiResp || "",
          nomeMae: req.body.nomeMaeResp || ""
        }
    }
  new Aluno(novoAluno).save().then(() => {
    res.send("Cadastro feito com sucesso")
  }).catch((err) => {    
    res.send(err)
  })  
})

module.exports = router