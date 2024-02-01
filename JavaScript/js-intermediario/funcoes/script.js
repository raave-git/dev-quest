function escreve(texto){
    document.write(texto)
}

{
escreve("Em JavaScript é possível criar um bloco de código autônonmo entre chaves, isto é, {}. Este bloco cria um escopo local para variáveis 'let' e 'const', entretanto, variáveis var não são delimitadas por escopos criados por blocos de código.")
}

function escopo_var(){
    var mensg = ("<br><br>Entretanto, variáveis do tipo 'var' são limitadas pelos escopos criados por funções. Veja o Console.")
    escreve(mensg)
}

escopo_var()
console.log(mensg)