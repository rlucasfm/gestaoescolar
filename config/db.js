if(process.env.NODE_ENV == "production"){
    // User gestaoescolar
    // Senha gestaoapp
    // DB GestaoApp
    module.exports = {mongoURI: "mongodb+srv://gestaoescolar:gestaoapp@gestaodb.qaui8.mongodb.net/GestaoDB?retryWrites=true&w=majority"}
}else{
    // Substituir o <DBNAME> pelo nome do banco
    //module.exports = {mongoURI: "mongodb://localhost/gestaoescolar"}
    // Usar apenas o banco online para desenvolvimento distribuido
    module.exports = {mongoURI: "mongodb+srv://gestaoescolar:gestaoapp@gestaodb.qaui8.mongodb.net/GestaoDB?retryWrites=true&w=majority"}
}