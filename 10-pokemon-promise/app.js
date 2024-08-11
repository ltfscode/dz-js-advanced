// const request = new XMLHttpRequest();
// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
// request.send();

// request.addEventListener('load', function () {
//   const data = JSON.parse(this.responseText);
//   const abilityUrl = data.abilities[0].ability.url;
//   const abilityIndex = abilityUrl.lastIndexOf('/');
//   const abilityId = abilityUrl.substring(abilityIndex + 1);

//   const request2 = new XMLHttpRequest();
//   request2.open('GET', `https://pokeapi.co/api/v2/ability/${abilityId}`);
//   request2.send();

//   console.log(`${data.name} - ${data.abilities[0].ability.name}`);
// });

const fetchPokemonData = () => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
    request.addEventListener('load', () => resolve(JSON.parse(request.responseText)));
    request.addEventListener('error', () => reject(new Error('Network error')));
    request.send();
  });
};

const fetchAbilityData = (pokemonData) => {
  const abilityUrl = pokemonData.abilities[0].ability.url;
  const abilityIndex = abilityUrl.lastIndexOf('/');
  const abilityId = abilityUrl.substring(abilityIndex + 1);

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://pokeapi.co/api/v2/ability/${abilityId}`);
    request.addEventListener('load', () => resolve(JSON.parse(request.responseText)));
    request.addEventListener('error', () => reject(new Error('Network error')));
    request.send();
  });
};

fetchPokemonData()
  .then(pokemonData => {
    return fetchAbilityData(pokemonData)
      .then(abilityData => {
        console.log(`${pokemonData.name} - ${pokemonData.abilities[0].ability.name}`);
      });
  })
  .catch(error => console.log(error));