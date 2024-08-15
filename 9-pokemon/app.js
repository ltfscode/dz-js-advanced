const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  const abilityUrl = data.abilities[0].ability.url;

  const request2 = new XMLHttpRequest();
  request2.open('GET', `${abilityUrl}`);
  request2.send();

  request2.addEventListener('load', function () {
    const data2 = JSON.parse(this.responseText);

    const lang = data2.effect_entries[0].language.name === 'en' ? console.log(`${data2.effect_entries[0].effect}`) : console.log(`${data2.effect_entries[1].effect}`);
    }
  );

  console.log(`${data.name} - ${data.abilities[0].ability.name}`);
  console.log(`${data.abilities[0].ability.name } - ${data.abilities[0].ability.url}`);
});
