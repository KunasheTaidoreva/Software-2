async function fetchData(){
    console.log("Function start...");
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (response.ok){
            const response_data = await response.json();
            return response_data;
        } else{
            throw new Error(`HTTP error! Status:${error}`);
        }
    } catch(error) {
        console.log(`Error fetching  data ${error}`);
    }
    
}

async function addPokemonTypes(url){
    console.log(url);
    const pokemonData = await fetchData(url)
    console.log(pokemonData);

}

async function createPokemonView(url){
    let returnedPromise = await fetchData();
    console.log(returnedPromise);
    const pokemonDiv = document.querySelector("#poke-content");
    for(let pokemon of returnedPromise.results){
        let pokemonText = document.createElement("p");
        pokemonText.textContent = pokemon.name;
        console.log(pokemonText);
        pokemonDiv.appendChild(pokemonText);
        pokemonText.addEventListener("click", function (event){
            addPokemonTypes(pokemon.url);
        });
    }
}

createPokemonView();

