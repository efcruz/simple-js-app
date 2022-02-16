let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "Pikachu",
            height: 1.04,
            types: ['Electric']
        },
        {
            name: "Pidgey",
            height: 1.00,
            types: ['normal', 'flying']
        },
        {
            name: "Beedrill",
            height: 3.03,
            types: ['bug', 'poison']
        }
    ]

        function add(pokemon) {
            pokemonList.push(pokemon);
        }
    
        function getAll() {
            return pokemonList;
        }
    
        return {
            add: add,
            getAll: getAll
        };
    })();

     //writing the name and height of the pokemons
    pokemonRepository.getAll().forEach(function(pokemon){
        document.write('<p class = "pokemon-list">' + pokemon.name + ' (height: ' + pokemon.height + ')'); {
            //condicional highlighting the biggest one     
            if (pokemon.height >= 3)
                document.write(' ' + '<span>Wow, that’s big!</span>');
            }
      });
     
