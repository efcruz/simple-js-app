let pokemonList = [
    {
        name: "Pikachu",
        height: 1.04,
        types: ['Electric']
    },
    {
        name: "Pidgey",
        height: 1.00,
        types: ['normal','flying']
    },
    {
        name: "Beedrill",
        height: 3.03,
        types: ['bug','poison']
    }
]
    //writing the name and height of the pokemons
    pokemonList.forEach(function(pokemon) {
        document.write('<p class = "pokemon-list">'+ pokemon.name + ' (height: ' + pokemon.height + ') ');
    //condicional highlighting the biggest one      
        if (pokemon.height >=3){
         document.write( ' ' + '<span>Wow, that’s big!</span>');
        }
      });
    
    document.write(pokemonList.forEach());