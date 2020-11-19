const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Alunos")
const Aluno = mongoose.model("alunos")

router.get('/cadastro', (req,res) => {
    res.render('alunos/cadastro')
})

router.get('/busca', (req,res) => {
    res.render('alunos/cadastro')
})

router.get('/editar', (req,res) => {
    res.render('alunos/cadastro')
})

router.get('/deletar', (req,res) => {
    res.render('alunos/cadastro')
})

router.post('/cadastro/add', (req,res)=> {
    const novoAluno = {
        nome: req.body.nomeAluno,
        nascimento: req.body.dataNascAluno
    }
  new Aluno(novoAluno).save().then(() => {
    req.flash("success_msg", "Aluno cadastrado com sucesso")
    res.send("Cadastro feito com sucesso")
  }).catch((err) => {
    req.flash("error_msg", "Houve um erro ao cadastrar o aluno, tente novamente")
    res.send(err)
  })  
})

module.exports = router