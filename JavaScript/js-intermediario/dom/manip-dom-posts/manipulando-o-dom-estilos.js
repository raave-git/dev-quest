function alterarCor(){
    let posts = document.getElementsByClassName('posts')
    let segundoPost = posts[1]

    console.log('segundo post' + segundoPost)
    segundoPost.style.backgroundColor = 'red'; //a propriedade .style.propriedadeCSS adiciona propriedades a uma classe. As propriedades CSS entretando devem ser transformadas, de exemplo-propriedade para exemploPropriedade, isto é, Camel Case
}

function alterarFonte(){
    let textoPost = document.getElementsByClassName('texto-post')
    let segundoTexto    = textoPost[1]

    console.log(textoPost)
    segundoTexto.classList.add('fonte-grande')
}