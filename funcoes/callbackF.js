function showData(id, callbackSucesso, callbackErro){
    if(true){
        callbackSucesso('Funções callback em JS','Funções são muito utilizadas...')
    }else{
        callbackErro('Erro ao recuperar dados')
    }
}
let callbackSucesso = function(titulo, descrição){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr/>')
    document.write('<p>' + descrição + '</p>')
}
let callbackErro = function(erro){
    document.write('<p><b>Erro: </b>' + erro + '</p>')
}
showData(1, callbackSucesso, callbackErro)