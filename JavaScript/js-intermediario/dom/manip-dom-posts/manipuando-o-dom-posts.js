function postar(){
    let inputComentario = document.getElementsByName("novo-comentario"); //captura o elemento no HTML
    let textoDigitado = inputComentario[0].value; //como a função "document.getElementsByName" retorna uma array, é necessáio usar o indíce da array na declaração, isso não aconte quando se usa o "document.getElementsById", por exemplo.

    if(!textoDigitado){
        alert("Digite um comentáio!")
    } else {
        let novoComentario = document.getElementById("novo-comentario");
        novoComentario.innerHTML += `<p>@usuario comentou: ${textoDigitado}</p>` //usar += adicionar/concatena a nova informação dentro da tag que estou manipulando, usar = faz com que a informação dentro da tag seja substituida/sobrescrevida 
    }
}