function reporte(texto){
    console.log(texto);
}

async function criar_baralho(){
    const api_url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
        const resposta = await fetch(api_url); //a função 'fetch' retorna uma Promise.
        var baralho = await resposta.json(); //a função '.json' retorna uma Promise.
        return baralho;
}

async function gerar_carta(deck_id){
    const api_url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
        const resposta = await fetch(api_url);
        return await resposta.json();
}

async function tirar_carta(){
    const baralho = await criar_baralho();
        const carta = await gerar_carta(baralho.deck_id)

    const imagem_da_carta = carta.cards[0].image;
        document.getElementById('carta').src = imagem_da_carta;

    reporte(carta);
}

// botão:
document.getElementById('botao').addEventListener('click',tirar_carta);
