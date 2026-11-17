"use strict";

async function fetchPokemon(){
    const response= await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    
    const data = await response.json();

    const pokemonList = document.querySelector("#pokemon-list");

    data.results.forEach(pokemon=>{
        const pokemonElement=document.createElement("p");
        pokemonElement.textContent=pokemon.name;
        pokemonElement.style.cursor = "pointer";

        pokemonElement.addEventListener("click",()=>{
            async function fetchForms() {
                const response = await fetch(pokemon.url);
                const data = await response.json();
                pokemonElement.querySelectorAll(".form").forEach(element => element.remove());
                data.forms.forEach(form=>{
                    const formElement = document.createElement("p");
                    formElement.classList.add("form");
                    formElement.textContent = form.name;
                    pokemonElement.appendChild(formElement);
                })
            }
            fetchForms();
        })
        pokemonList.appendChild(pokemonElement);
    });
}

fetchPokemon();