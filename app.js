// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo (){
    let nombreAmigo = document.getElementById('nombreAmigo').value;

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    amigos.push(nombreAmigo)
    console.log(amigos);//para verificar que se están añadiendo correctamente

    document.getElementById('nombreAmigo').value = ''

    actualizarListaAmigos()
}

function actualizarListaAmigos(){

    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i]

        let elementoLista = document.createElement('Li');
        elementoLista.textContent = amigo;

        lista.appendChild
    }
}

function sortearAmigo(){
    if (amigos.length > 0){
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + amigoSorteado
    } else {
        document.getElementById("resultado").innerHTML = "No hay amigos para sortear.";
    }
}