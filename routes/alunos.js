const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")

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

module.exports = router