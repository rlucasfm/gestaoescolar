const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")

router.get('/', (req,res) => {
    res.render('dashboard/main')
})

module.exports = router