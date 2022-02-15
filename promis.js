const  input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonName = document.querySelector("#pokemon-name");
const image = document.querySelector('img');
const pokemonId = document.querySelector("#pokemon-id");
const video = document.querySelector('iframe');
console.log( input, button, pokemonName, image, pokemonId, video );


function getPokemon(name){
    // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data);
        pokemonName.innerHTML = data.name;
        image.src = data.sprites.front_shiny;
        pokemonId.innerHTML = data.id;
        // video.src = data.location_area_encounters;
    })
}

// getPokemon('mewtwo');

button.addEventListener('click', ()=>{
    getPokemon(input.value);
})

 async function getPokemon(name){
    let response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = await response.json();
        pokemonName.innerHTML = data.name;
        image.src = data.sprites.front_shiny;
        pokemonId.innerHTML = data.id;
}
button.addEventListener('click', ()=>{
    getPokemon(input.value);
})