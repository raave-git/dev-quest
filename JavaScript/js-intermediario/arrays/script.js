let livros= [   ['O Império Final', 'Brandon Sanderson', 12014],
                ['O Nome do Vento','Patrick Rothfuss', 12009],
                ['A Guerra dos Tronos', 'George R. R. Martin', 12019]
            ]

console.table(livros)

console.log("O melhor livro do mundo é: " + livros[0][0] + " do " + livros[0][1])

let livrosTramanho = livros.length

for(loop = 0; loop < livrosTramanho; loop++){
    console.log('Livro: ' + livros[loop][0])
}

livros.forEach(function(x, y, z, a){ //segundo os testes que fiz, a função anônima tem como parâmetros padrões: 1 (x). o número do item dentro da array; 2 (y) . o número da iteração/o número da posição; 3 (z). a própria array

    //explicação do forEach: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    
    console.log('Autor: ' + x[1])
    console.log('Coisa desconhecida 1: ' + y)
    console.log('Coisa desconhecida 2: ' + z)
    console.log('Coisa desconhecida 3: ' + a)
})