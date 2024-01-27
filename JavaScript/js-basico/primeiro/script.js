// let calc = prompt('Digite um número: ')
// let mult = 9

// console.log(calc*mult)

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// // while (){}

function escreva(texto){
    document.write(texto)
}

// function pergunte(){
//     var x = prompt("Qual seu nome?")

//     return x
// }

// function boas_vindas(nome='Fulano') {
//     alert('Bem-vindo, ' + nome)
// }

// nome = pergunte()
// boas_vindas(nome)

// let boletoPago = false

// if(boletoPago){
//     alert('O boleto foi pago.')
// } else {
//     alert('O boleto não foi pago.')
// }

function pergunte (){
    let pergunta = confirm("És bem-vindo, aventureiro. Queres pagar R$ 50 pela noite na nossa hospedagem?")
    return pergunta
}

let conf = pergunte()
    if(conf===true){
        alert('Que ótimo! Nós temos as melhores camas da região.')
    } else if(conf===false){
        alert('Que pena. Você parecia ser uma pessoa melhor.')
    }

for (let i=0; i<=10; i++) {
    console.log('O número atual é ' + i)
}

for (let i=0; i<=10; i++) {
    d=i*2
    console.log('O dobro de ' + i, ' é ' + d)
}