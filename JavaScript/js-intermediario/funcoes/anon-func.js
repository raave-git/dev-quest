//com closure:

function saudacao(nome){
    return function(){
        escreve('Olá, ' + nome);
    }
  }

let saudacaoR = saudacao('Raavë');
saudacaoR();

//funções anônimas simples:
let meu_nome = function(){
    return "Meu nome é Raavë L. Aires."
}

let minha_idade = function(){
    return 2024-2001
}

escreve("<br>" + meu_nome())
escreve("<br> Eu tenho " + minha_idade() + " anos.")