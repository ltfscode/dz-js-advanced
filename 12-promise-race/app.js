'use strict';

const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3'), 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 4'), 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 5'), 1000)),
];

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}

async function race() {
  try {
    const result = await promiseRace(promises);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

race();