function reporte(texto){
    console.log(texto)
}

//as funções a serem encadeadas:
let colocarAguaParaFerver = (vasilha,gas)=>{
    return new Promise((resolve, reject) => {
        if(typeof vasilha != 'boolean'){
            throw 'Como é, OP?' //o throw lança um erro via código
        }
        
        if (vasilha && gas){
            reporte('Pt.1: A água está no fogo.');
                resolve();
        } else {
            const mensagemDeErro = ('Falta algo, OP.');
                reject(mensagemDeErro);
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

let vasilha = 'true';
let gas = true;

//encadeando com async e await:
async function chocolate (){
    try {
        const aguaFervida = await colocarAguaParaFerver(vasilha,gas);
        const chocolatePronto = await fazerChocolateQuente(aguaFervida);
        const chocolateTomado = await tomarChocolate(chocolatePronto);
        var canecaLavada = await lavarACaneca(chocolateTomado);
    } catch (erro){
        console.log(erro)
    } finally {
        if(canecaLavada) reporte('Buchin full of chocolate.')
    }
    
}

chocolate();