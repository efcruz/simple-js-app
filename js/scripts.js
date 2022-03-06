let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

    //Unordered list of pokemons
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".list-group");
        let listItem = document.createElement("li");
        let button = document.createElement("button");

        button.innerText = pokemon.name;
        button.classList.add("btn-primary");
        listItem.classList.add("list-group-item");
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        //Event listener - click and show details
        button.addEventListener("click", function (event) {
            //Load content
            showDetails(pokemon)
        })
    }

    //Go get details from loadDetails (promise)
    function showDetails(item) {
        loadDetails(item).then(function () {
            showModal(
                item.name, 
                item.height, 
                item.types, 
                item.imageUrl
            );
        });
    }

    //Get API
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
            item.types = [];
            details.types.forEach(function(element) {
                item.types.push(element.type.name);
              });
        }).catch(function (e) {
            console.error(e);
        });
    }

    //Function to show modal
    function showModal(name, height, types, imageUrl) {

        let modalHeader = $(".modal-header");
        let modalTitle = $(".modal-title");
        let modalBody = $(".modal-body")

        modalTitle.empty();
        modalBody.empty();

        /*//create modal container
        modalContainer.classList.add('is-visible');
        // Clear all existing modal container content
        modalContainer.innerHTML = '';*/

        /*//Create modal from scratch
        let modal = document.createElement('div');
        modal.classList.add('modal');

        //create close button, calling the hideModal function when clicked
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);*/

        // Add the new modal content

        //create title
        let pokemonName = $("<h1>" + name + "</h1>");

        //create content paragraph

        let pokemonImage = $('<img class="modal-img" style="width:50%">');
        pokemonImage.attr("src", imageUrl);

        let pokemonHeight = $("<p>" + "Height: " + height + "</p>");

        let pokemonType = $("<p>" + "Type: " + types.join(", ") + "</p>");

        //apend elements
        modalTitle.append(pokemonName);
        modalBody.append(pokemonImage);
        modalBody.append(pokemonHeight);
        modalBody.append(pokemonType);

    }

    /*// Function to hide modal
    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }
    
    //Event listener for closing modal with ESC key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
        }
    });

    //Event listener for closing modal when click outside modal
    modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        // We only want to close if the user clicks directly on the overlay
        let target = e.target;
        if (target === modalContainer) {
        hideModal();
        }
    }); 

    /*show modal when click "show more"
    document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
    });*/


    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

//Getting pokemon list and details
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});