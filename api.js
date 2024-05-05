
const contenedorTarjetas = document.getElementById("cards");

//Recorrer array para traer todos los pokemones
function buscarPokemones(cant){

    for(let i = 0; i <= cant; i++)
        buscarPokemon(i);
}

//Traer Pokemon por ID
function buscarPokemon(id){

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then( respuesta => respuesta.json())
    .then( datos => {crearTarjetas(datos);
    });
}

//Creación de las tarjetas para los pokemones
function crearTarjetas(pokemon){

    
    const card = document.createElement('figure');
    card.classList.add('card');
    card.className += " card--" + pokemon.types[0].type.name;

    const contImg = document.createElement('div');
    contImg.classList.add('card__image-container');
    const img = document.createElement('img');
    img.src = pokemon.sprites.other['official-artwork'].front_default;
    contImg.appendChild(img);

    const caption = document.createElement('figcaption');
    caption.classList.add('card__caption');
    const nom = document.createElement('h1');
    nom.classList.add('card__name');
    nom.textContent = pokemon.name;
    const tip = document.createElement('h3');
    tip.classList.add('card__type');
    tip.textContent = pokemon.types[0].type.name;

    
    caption.append(nom,tip);
    
    card.append(contImg,caption);
  
    contenedorTarjetas.appendChild(card);

}


buscarPokemones(100);