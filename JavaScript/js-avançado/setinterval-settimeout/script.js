//funções:
// setTimeout(()=>{
//     console.log('Oi');
// },3000)

// setInterval(() => {
//     console.log('Oi');
// }, 2000);

//gerando um id para elas:
const timeOut = setTimeout(() => {
    alert('Oi');
}, 5000);

const intervalo = setInterval(() => {
    console.log('Oi, alô.')
}, 2000);

console.log(intervalo)
clearInterval(intervalo)