
var app = require('./config/custom-express')();

//abrir uma porta para escutar requisições na porta 3000
// com uma função de callback
app.listen(3000, function () {
    console.log('servidor rodando na porta 3000');
});

