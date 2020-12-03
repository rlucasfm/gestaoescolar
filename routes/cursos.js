const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Cursos")
const Aluno = mongoose.model("cursos")
require("../models/Escolas")
const Escola = mongoose.model("escolas")
const {accessLevel} = require("../helpers/permissions")

router.get('/', (req,res) => {
    res.redirect("/dashboard")
})

router.get('/cadastro', (req,res) => {
    res.render('cursos/cadastro')
})

module.exports = router