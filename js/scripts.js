let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

        //add new pokemon
        function add(pokemon) {
          if (
            typeof pokemon === "object" &&
             "name" in pokemon &&
             "detailsUrl" in pokemon
              
        ) {
            pokemonList.push(pokemon);
        } else {
          console.log("pokemon is not correct");
        }
      }
        //get all pokemons
        function getAll() {
          return pokemonList;
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

        function showDetails (item) {
            loadDetails(item).then(function () {
            console.log(item)
            });
          }

          //promise
          function loadList() {
            return fetch(apiUrl).then(function (response) {
              return response.json();
            }).then(function (json) {
              json.results.forEach(function (item) {
                let pokemon = {
                  name: item.name,
                  detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
              });
            }).catch(function (e) {
              console.error(e);
            })
          }

          function loadDetails(item) {
            let url = item.detailsUrl;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (details) {
              // Now we add the details to the item
              item.imageUrl = details.sprites.front_default;
              item.height = details.height;
              item.types = details.types;
            }).catch(function (e) {
              console.error(e);
            });
          }

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails
        };
    })();

    //Getting pokemon list and details
    pokemonRepository.loadList().then(function () {
        pokemonRepository.getAll().forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon);
        });
    });