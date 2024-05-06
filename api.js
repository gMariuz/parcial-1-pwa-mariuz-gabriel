const contenedorTarjetas = document.getElementById("cards");
const selecciónTarjetas = document.querySelectorAll("figure.card");
const btnBuscar = document.getElementById("btnBuscar");
const btnListado = document.getElementById("btnListado");
const input = document.getElementById("input");
const modal = document.getElementById("modalDetalle");

//Recorrer array para traer todos los pokemones y armar las tarjetas
function mostrarPokemones(cant){

    for(let i = 0; i <= cant; i++)
        buscarPokemon(i);
}

//Traer Pokemon 
function buscarPokemon(valor){

    fetch(`https://pokeapi.co/api/v2/pokemon/${valor}/`)
    .then( respuesta => respuesta.json())
    .then( datos => {crearTarjetas(datos);
    });
}

//Creación de la tarjeta para los pokemones
function crearTarjetas(pokemon){

    
    const card = document.createElement('figure');
    card.classList.add('card');
    card.className += " card--" + pokemon.types[0].type.name;
    card.setAttribute("data-bs-toggle","modal");
    card.setAttribute("data-bs-target","#modalDetalle");
    card.setAttribute("id",pokemon.id);

    const contImg = document.createElement('div');
    contImg.classList.add('card__image-container');
    const img = document.createElement('img');
    img.src = pokemon.sprites.other['official-artwork'].front_default;
    contImg.appendChild(img);

    const caption = document.createElement('figcaption');
    caption.classList.add('card__caption');
    const nom = document.createElement('h2');
    nom.classList.add('card__name');
    nom.textContent = pokemon.name;
    const tip = document.createElement('h3');
    tip.classList.add('card__type');
    tip.textContent = pokemon.types[0].type.name;
    
    caption.append(nom,tip);
    
    card.append(contImg,caption);
  
    contenedorTarjetas.appendChild(card);

}



//Buscar un pokemon
btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    contenedorTarjetas.innerHTML = '';
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
    .then(response => {
        if(response.ok){
            buscarPokemon(input.value);
            btnListado.disabled = false;
        } else {
            alert("No se encontró un pokemon que coincida con el valor ingresado");
            btnListado.disabled = false;
        }
    })
})

//Traer los pokemones al presionar el botón de mostrar
btnListado.addEventListener('click', (e) => {
    contenedorTarjetas.innerHTML = '';
    mostrarPokemones(100);
    btnListado.disabled = true;
})