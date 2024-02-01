let tenis = {
    //chave: valor,
    cor: 'Vermelho',
    tamanho: 42,
    emEstoque: true
}

//para acessar as propriedades de um objeto, usamos as seguintes sintaxes:
//objeto.propriedade
console.log(tenis.cor)

//ou: objeto['propriedade']
console.log(tenis['emEstoque'])

//mudando/adicionando propriedades:
tenis.valor = 'R$ 100'

console.log(tenis)