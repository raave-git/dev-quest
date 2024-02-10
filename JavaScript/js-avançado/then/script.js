function reporte(texto){
    console.log(texto)
}

//em suma, encadear significa fazer com que uma função só seja executada depois que outra terminar, e desde que termine com 'resolve'


//encadeando funções com o then:
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
    new Promise((resolve) => {
        reporte('Pt. 3: Estou tomando o chocolate.');
            resolve(true);
    })
}

let lavarACaneca = (chocolateBebido)=>{
    new Promise((resolve) => {
        reporte('Pt. 4: Estou lavando a caneca.');
            resolve(true);
    })
}

//executando o encadeamento:
let vasilha = true;
let gas = true;

colocarAguaParaFerver(vasilha,gas)
    .then(()=>{
        return fazerChocolateQuente();
    })
    .then(()=>{
        return tomarChocolate();
    })
    .then(()=>{
        return lavarACaneca();
    })
    .then(()=>{
        reporte('Buchin full of chocolate!')
    })