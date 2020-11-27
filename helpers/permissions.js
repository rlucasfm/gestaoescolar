module.exports = {
    accessLevel: function(req, res, level, callback){
        if(req.user.userAccess > level){
            callback()
        }else{
            req.flash("error_msg", "Seu nível de acesso é muito baixo!")
            res.redirect('/dashboard')
        }
    }
}