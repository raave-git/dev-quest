let pessoas = [
    {nome: 'Nyria', idade: 22},
    {nome: 'Vaartën', idade: 20},
    {nome: 'Qalevë', idade: 18},
    {nome: 'Lucaat', idade: 29}
]

function escreva(texto){
    document.write(texto);
}

function reporte(texto){
    console.log(texto)
}


filtrar();

//filter:
function filtrar(){ //filtragem com laço
    let filtroDeIdade = []
    for (loop = 0; loop < pessoas.length; loop++){
        if(pessoas[loop].idade===18){
            filtroDeIdade.push(pessoas[loop]);
        };
    }

    console.log(filtroDeIdade)
}

//filragem com filter
let outroFiltro = pessoas.filter((pessoa)=> pessoa.idade === 29)

reporte(outroFiltro)

//map
let nomes = pessoas.map((pessoa)=> pessoa.nome + ' tem ' + pessoa.idade + ' anos de idade.')
reporte(nomes)

//reduce 
