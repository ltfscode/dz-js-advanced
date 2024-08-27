'use strict'


navigator.geolocation.getCurrentPosition((position) => {
  console.log(position)
})

function getCurrentLocation(callback) {
  navigator.geolocation.getCurrentPosition(function(position) {
    callback({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
  });
}

function getCurrentLocationPromise() {
  return new Promise((resolve, reject) => {
    getCurrentLocation((pos) => {
      resolve(pos);
    }, (error) => {
      reject(error);
    });
  });
}

getCurrentLocationPromise()
  .then((pos) => {
    console.log(pos);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Finally');
  });