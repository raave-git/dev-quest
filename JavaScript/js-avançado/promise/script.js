function reporte(texto){
    console.log(texto)
}

new Promise((resolve, reject) => { //os parâmetros da promise são, na verdade, funções
    
})

let ferverAgua = (chaleiraEstaNoFogao,fogaoEstaLigado)=> {
    return new Promise((resolve, reject) => {
        //o return posto na declaração da Promise torna desnecessário colocá-lo dentro das condicionais junto com as funções 'resolve' e 'reject'
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            reporte('Começando o processo de fervura!');
                resolve();
        } else {
            reporte('Coloque a chaleira no fogão e ligue o fogo.');
                reject();
        };
    });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

    ferverAgua(chaleiraEstaNoFogao,fogaoEstaLigado);
    reporte('Fazendo o chá!');