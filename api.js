
const contenedorTarjetas = document.getElementById("cards");


function buscarPokemones(cant){

    for(let i = 0; i <= cant; i++)
        buscarPokemon(i);
}

function buscarPokemon(id){

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then( respuesta => respuesta.json())
    .then( datos => {crearTarjetas(datos);
    });

}



function crearTarjetas(pokemon){

    const nom = document.createElement('p');
    nom.textContent = pokemon.name;


    contenedorTarjetas.appendChild(nom);

}


buscarPokemones(100);