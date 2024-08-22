// const request = new XMLHttpRequest();
// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
// request.send();

// request.addEventListener('load', function () {
//   const data = JSON.parse(this.responseText);
//   const abilityUrl = data.abilities[0].ability.url;

//   const request2 = new XMLHttpRequest();
//   request2.open('GET', `${abilityUrl}`);
//   request2.send();

//   request2.addEventListener('load', function () {
//     const data2 = JSON.parse(this.responseText);

//     const lang = data2.effect_entries[0].language.name === 'en' ? console.log(`${data2.effect_entries[0].effect}`) : console.log(`${data2.effect_entries[1].effect}`);
//     }
//   );

//   console.log(`${data.name} - ${data.abilities[0].ability.name}`);
//   console.log(`${data.abilities[0].ability.name } - ${data.abilities[0].ability.url}`);
// });


function jsonParse(response) {
  try {
    return JSON.parse(response);
  } catch (e) {
    console.error(e);
  }
}

function getPokemon() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
  xhr.send();

  xhr.addEventListener('load', function () {
    const json = jsonParse(this.responseText);
    const { abilities } = json;
    const { ability } = abilities[0];
    getEffect(ability.url);
  });
}

function getEffect(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.addEventListener('load', function () {
    const { effect_entries } = jsonParse(this.responseText);
    const { effect } = effect_entries.find(({ language }) => language.name === 'en');
    console.log(effect);
  });
}
getPokemon();

/* 
    ------------------------------------------  
    VARIANT 2  
    ------------------------------------------  
*/

function request(url, callback, method = 'GET', body = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.send(body);

  xhr.addEventListener('load', function () {
    const json = jsonParse(this.responseText);
    if (typeof callback === 'function') {
      callback(json, printEffect);
    } else {
      console.log(json);
    }
  });
}

function parseEffect(json, callback) {
  const { abilities } = json;
  const { ability } = abilities[0];
  const { url } = ability;

  request(url, callback);
}

function printEffect(json) {
  const { effect_entries } = json;
  const { effect } = effect_entries.find(({ language }) => language.name === 'en');
  console.log(effect);
}

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
request(url, parseEffect);  