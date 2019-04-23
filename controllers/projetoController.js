//Exporta uma funcao que recebe o app por parâmetro
module.exports = function (app) {
    //cria um método web (get, post, delete...) sob a url /projeto/listar
    app.get('/projeto/listar', function (req, res) {
        console.log('consultando a lista de projetos');
        res.send('retorna a lista de projetos');
    });

}