let pokemonRepository = (function () {
    let repository = [
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
        },
    ];
        //add new pokemon
        function add(pokemon) {
          if (
            typeof pokemon === "object" &&
             "name" in pokemon &&
              "height" in pokemon &&
              "types" in pokemon
        ) {
          repository.push(pokemon);
        } else {
          console.log("pokemon is not correct");
        }
      }
        //get all pokemons
        function getAll() {
          return repository;
       }

       //unordered list of pokemons
        function addListItem(pokemon){
          let pokemonList = document.querySelector(".pokemon-list");
          let listItem = document.createElement("li");
          let button = document.createElement("button");

          //Event listener - click and show details
          button.addEventListener("click", function (event) {
            showDetails(pokemon)
          })
          button.innerText = pokemon.name;
          button.classList.add("button-class");
          listItem.appendChild(button);
          pokemonList.appendChild(listItem);
        }

        function showDetails (pokemon) {
            console.log(pokemon)
          }

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem
        };
    })();

    //Add new pokenon here
    pokemonRepository.add({name: "Rattata", height: 1.00, types: ["normal", "fighting"] });

    console.log(pokemonRepository.getAll());

    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
