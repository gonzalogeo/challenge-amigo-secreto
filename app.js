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
}