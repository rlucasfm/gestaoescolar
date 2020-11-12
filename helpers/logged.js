module.exports = {
    isLogged: function(req, res, next){
        if(req.isAuthenticated()){
            switch(req.user.userAccess){
                case 0: 
                    res.locals.userStatus = "Professor";
                    break;
                case 1:
                    res.locals.userStatus = "Coordenador";
                    break;
                case 2:
                    res.locals.userStatus = "Escola";
                    break;
                case 3:
                    res.locals.userStatus = "Secretaria";
                    break;
                case 99:
                    res.locals.userStatus = "SysAdmin";
                    break;
            }
            return next()
        }
        req.flash("error_msg", "Você precisa estar logado para acessar!")
        res.redirect("/")
    }
}