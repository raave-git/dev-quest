function reporte(texto){
    console.log(texto)
}

//as funções a serem encadeadas:
let colocarAguaParaFerver = (vasilha,gas)=>{
    return new Promise((resolve, reject) => {
        if (vasilha && gas){
            reporte('Pt.1: A água está no fogo.');
                resolve();
        } else {
            reporte('Falta algo, OP.');
                reject();
        }
    })
}

let fazerChocolateQuente = (aguaQuente)=>{
    return new Promise((resolve) => {
        reporte('Pt. 2: Coloquei o leite e o chocolate na água que estava no fogo.');
            resolve(true);
    })
}

let tomarChocolate = (chocolateFeito)=>{
    return new Promise((resolve) => {
        reporte('Pt. 3: Estou tomando o chocolate.');
            resolve(true);
    })
}

let lavarACaneca = (chocolateBebido)=>{
    return new Promise((resolve) => {
        reporte('Pt. 4: Estou lavando a caneca.');
            resolve(true);
    })
}

let vasilha = true;
let gas = true;

//encadeando com async e await:
async function chocolate (){
    const aguaFervida = await colocarAguaParaFerver(vasilha,gas);
    const chocolatePronto = await fazerChocolateQuente(aguaFervida);
    const chocolateTomado = await tomarChocolate(chocolatePronto);
    const canecaLavada = await lavarACaneca(chocolateTomado);

        if(canecaLavada){
            reporte('Buchin full of chocolate.')
        } 
}

chocolate();