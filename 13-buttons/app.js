'use strict'

const container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container);

const counter = document.createElement('div');
counter.classList.add('counter');
counter.innerText = 0;
container.append(counter);

const buttons = [];
for (let i = 0; i < 5; i++) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = 'Нажми меня';
  container.append(button);
  buttons.push(button);
}

container.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') return;

  const lastActiveButton = buttons.find(button => button.innerText === 'Нажата');
  if (lastActiveButton) {
    lastActiveButton.innerText = 'Нажми меня';
  }

  event.target.innerText = 'Нажата';
  counter.innerText = +counter.innerText + 1;
});