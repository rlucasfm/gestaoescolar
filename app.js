    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const path = require('path')
    const mongoose = require('mongoose')
    const session = require('express-session')
    const flash = require('connect-flash')
    const db = require("./config/db")
    const dashboard = require("./routes/dashboard")
    const alunos = require("./routes/alunos")
    const passport = require('passport')
    require("./config/auth")(passport)
    const {isLogged} = require("./helpers/logged")

// Configurações
    // Configuração da sessão
        app.use(session({
            secret: "codigobacanaedificil",
            resave: true,
            saveUninitialized: true
        }))
        
        app.use(passport.initialize())
        app.use(passport.session())

        app.use(flash())
    // Middleware para as sessões
    app.use((req,res,next) => {
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        res.locals.error = req.flash("error")
        res.locals.user = req.user || null
        next()
    })
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Mongoose
        mongoose.set('useCreateIndex', true)
        mongoose.Promise = global.Promise
        mongoose.connect(db.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conectado ao MongoDB.")
        }).catch((err) => {
            console.log("Houve um erro ao conectar: "+err)
        })
    // Arquivos estáticos
        app.use(express.static(path.join(__dirname,"public")))

// Rotas
app.use('/dashboard', isLogged, dashboard)
app.use('/alunos', isLogged, alunos)

app.get('/', (req,res) => {
    if(req.isAuthenticated()){
        res.redirect('/dashboard')
    }else{
        res.render('index', {layout: false})
    }
})

app.post('/login', (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/",
        failureFlash: true
    })(req, res, next)
})

app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})


// Abertura do LISTEN
    const PORT = process.env.PORT || 8081
    app.listen(PORT, () => {
        console.log("Servidor aberto com sucesso na porta "+PORT)
    })