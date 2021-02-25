

let pokemon = document.getElementById("pokemon-input");
let pokemonAbility1 = document.getElementById("pokemon-ability-1");


document.getElementById("pokemon-submit").addEventListener("click", fetchPokemon)

function fetchPokemon () {
    let pokemonName = pokemon.value.toLowerCase();
    console.log(pokemonName);

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    // console.log(url);
    // getExternal(url);
    getData(url);
}

// // Promise version 
function getExternal(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.log(err));
}


async function getData(url) {
    try {
        let info = await fetch(url);
        const data = await info.json();
        showData(data);
    } catch (err) {
        errorDisplay();
    }
}

function showData(data) {
    let abilities = data.abilities;
    let txt = "";
    for (number in abilities) {
        console.log(abilities[number].ability.name);
        txt += "<li>" + abilities[number].ability.name.toUpperCase();
    }
    pokemonAbility1.innerHTML = txt;
}

function errorDisplay() {
    pokemonAbility1.innerHTML = "Error - Check Pokemon Name";
}