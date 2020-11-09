const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")

router.get('/cadastro', (req,res) => {
    res.render('dashboard/main')
})

router.get('/busca', (req,res) => {
    res.render('alunos/main')
})

router.get('/editar', (req,res) => {
    res.render('alunos/main')
})

router.get('/deletar', (req,res) => {
    res.render('alunos/main')
})

module.exports = router