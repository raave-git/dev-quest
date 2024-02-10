function criarMatrizTriangularInferior(ordem) {
    const matriz = [];
    for (let i = 0; i < ordem; i++) {
        const linha = [];
        for (let j = 0; j <= i; j++) {
            linha.push(Math.floor(Math.random() * 9) + 1); // Preenche a linha com valores aleatórios
        }
        matriz.push(linha);
    }
    return matriz;
}

function buscarValor(matriz, valor) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === valor) {
                return { linha: i, coluna: j }; // Retorna o índice da linha e coluna onde o valor foi encontrado
            }
        }
    }
    return null; // Retorna null se o valor não for encontrado
}

function main() {
    const ordem = parseInt(prompt("Digite a ordem da matriz (quantidade de linhas e colunas):"));
    const matriz = criarMatrizTriangularInferior(ordem);

    console.log("\nMatriz triangular inferior gerada:");
    matriz.forEach(linha => console.log(linha));

    const valorPesquisado = parseInt(prompt("Digite o valor a ser pesquisado na matriz:"));
    const resultado = buscarValor(matriz, valorPesquisado);

    if (resultado) {
        console.log(`O valor ${valorPesquisado} foi encontrado na linha ${resultado.linha} e coluna ${resultado.coluna}.`);
    } else {
        console.log(`O valor ${valorPesquisado} não foi encontrado na matriz.`);
    }
}

main();
