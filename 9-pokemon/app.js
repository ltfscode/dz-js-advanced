const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  const abilityUrl = data.abilities[0].ability.url;
  const abilityIndex = abilityUrl.lastIndexOf('/');
  const abilityId = abilityUrl.substring(abilityIndex + 1);

  const request2 = new XMLHttpRequest();
  request2.open('GET', `https://pokeapi.co/api/v2/ability/${abilityId}`);
  request2.send();

  console.log(`${data.name} - ${data.abilities[0].ability.name}`);
});
