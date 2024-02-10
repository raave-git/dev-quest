function escreva(texto){
    document.write(texto);
}

function reporte(texto){
    console.log(texto)
}

// Desestruturação de objetos:
let pessoa = {
    nome: 'Raavë',
    sobrenome: 'Aires',
    idade: 22
}

// Desestruturando com variaveis individuais:
let nome = pessoa.nome
    reporte(nome);

let idade = pessoa.idade
    reporte(idade)

// Desestruturação criando varias variaveis de uma vez:
let {
    // estrutura: nome_da_propriedade: nome da variavel
    nome: nome2,
    idade: idade2,

    // quando a variavel tem o mesmo nome da propriedade, é possível omitir o nome da propriedade que o JS vai entender
} = pessoa

    reporte(nome2)
    reporte(idade2)
    

// Desestruturação de arrays
const cores = ['Vermelho', 'Preto', 'Azul', 'Violeta', 'Cinza'];

// Na desestruturação de arrays, as novas variaveis serão atribuidas conforme a posição do elemento no array
const [um, dois, três, quatro, cinco, seis] = cores;
    reporte(um)
    reporte(seis)


// spread:
let novasCores = [...cores,'Verde']
    reporte(novasCores)

let todasAsCores = [...novasCores]
    reporte(todasAsCores)


//rest:
function incentivar(mensagem,nome_m){
    reporte(`${mensagem}, ${nome_m}`)
}