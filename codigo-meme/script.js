//importação dos audios:
let pornoGay = new Audio('./assets/click.mp3');
let cebolinha = new Audio('./assets/cebolinha.mp3')

//variaveis globais
let corpo = document.getElementsByClassName('corpo')[0];
let titulo = document.getElementById('titulo');
let subtitulo = document.getElementById('subtitulo');
let pergunta = document.getElementById('pergunta');
let divAtual = document.getElementById('botoes');

//função de click sim
let respostaSim = document.getElementById('sim').addEventListener('click',()=>{
    pornoGay.play();

    corpo.style.backgroundColor = '#ff1fc7';

        let novaDiv = document.createElement('div');
        let texto =  document.createTextNode('');
            novaDiv.appendChild(texto);
    
            document.body.insertBefore(novaDiv,divAtual);
                novaDiv.innerHTML = '<a href="https://bit.ly/rickroll-010">Agora, clique aqui</a>';

                titulo.innerHTML = 'Arrasou, bicha!'

                subtitulo.remove();
                pergunta.remove();
                divAtual.remove();
})

//função de click não
let respostaNao = document.getElementById('nao').addEventListener('click',()=>{
    titulo.innerHTML = 'Bem-vinda à web, Fª.D.P!';
    pergunta.innerHTML = 'Então, você é mulher mesmo, né?';

        let novosBotoes = document.createElement('div');
        let botoes = document.createTextNode('');
            novosBotoes.appendChild(botoes);

            document.body.insertBefore(novosBotoes,divAtual);
                novosBotoes.innerHTML = '<button id="sim_m">Sim.</button><button id="nao_m">Não.</button>'
                
                divAtual.remove();

            //as arrow fuction dentro da arrow function que substituem os botões originais pelos novos
            let mulherSim = document.getElementById('sim_m').addEventListener('click',()=>{
                titulo.innerHTML = 'Você é uma: ';
                    novosBotoes.innerHTML = '<a href="https://bit.ly/rickroll-009">Agora, clique aqui</a>';
                    
                    subtitulo.remove();        
                    pergunta.remove();

                cebolinha.play();
            });

            let mulherNao = document.getElementById('nao_m').addEventListener('click',()=>{
                titulo.innerHTML = 'Pois é um viado! E ainda por cima, é um mentiroso!';
                    novosBotoes.innerHTML = '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Agora, clique aqui</a>';

                    subtitulo.remove();
                    pergunta.remove();
            });
})