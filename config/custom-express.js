//importar a biblioteca do express
var express = require('express');
//importar o consign
var consign = require('consign');
//importa o body-parser
var bodyparser = require('body-parser');

module.exports = function () {
    //instanciar o express
    var app = express();

    //para objetos json
    app.use(bodyparser.json());
    //para elementos http encoded
    app.use(bodyparser.urlencoded({extended: true}));

    //inicia o consign
    consign()
        //informa a pasta a ser scaneada
        .include('controllers')        
        //informa a variável que receve os objetos instanciados
        .into(app);    

    return app;
}
