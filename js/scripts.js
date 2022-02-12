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
for (let i=0; i < pokemonList.length; i++){
    document.write('<p class = "pokemon-list">'+ pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ');{
  //condicional hightliting the biggest one      
    }if (pokemonList[i].height >=3){
       document.write(' ' + '<span>Wow, that’s big!</span>');
     }
}