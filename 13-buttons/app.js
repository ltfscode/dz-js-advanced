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

// 
// 
// 
// Можно добавить "ограничитель" т.е.если кнопка уже нажата, то не вызывать "каунтер", а как это проверять - через активный элемент или через класс, или через текст - на Ваш выбор, пример ниже

// const elements = {
//   buttons: document.querySelector('.wrapper__buttons'),
//   count: document.querySelector('.wrapper__count'),
//   reset: document.querySelector('.button__reset'),
// };
// elements.reset.addEventListener('click', (e) => {
//   elements.count.innerHTML = 0;
//   [...elements.buttons.children].forEach((button) => {
//     button.innerHTML = 'Нажми меня';
//     button.classList.remove('-active-');
//   });
// });

// elements.buttons.addEventListener('click', (event) => {
//   if (event.target.tagName !== 'BUTTON') {
//     return;
//   }
//   const currentCount = Number(elements.count.innerHTML);
//   [...elements.buttons.children].forEach((button) => {

//     if (button === event.target) {
//       if (!button.classList.contains('-active-')) {
//         elements.count.innerHTML = currentCount + 1;
//       }

//       button.innerHTML = 'Нажата!';
//       button.classList.add('-active-');
//     } else {
//       button.innerHTML = 'Нажми меня';
//       button.classList.remove('-active-');
//     }
//   });
// });

// document.addEventListener('mouseover', (e) => {
//   if (e.target.tagName === 'BUTTON') e.target.classList.toggle('-focus-');
// });
// document.addEventListener('mouseout', (e) => {
//   if (e.target.tagName === 'BUTTON') e.target.classList.toggle('-focus-');
// });  
// < !DOCTYPE html >
//   <html lang="en">

//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <link rel="stylesheet" href="./style.css" />
//       <title>Жмякалки</title>
//       <script src="./app.js" defer></script>
//     </head>

//     <body>
//       <section>
//         <h1 class="title">ЖМЯКАЛКИ ! ! !</h1>
//         <div class="wrapper">
//           <div class="wrapper__buttons">
//             <button class="button wrapper__button">Нажми меня!</button>
//             <button class="button wrapper__button">Нажми меня!</button>
//             <button class="button wrapper__button">Нажми меня!</button>
//             <button class="button wrapper__button">Нажми меня!</button>
//             <button class="button wrapper__button">Нажми меня!</button>
//           </div>
//           <div class="wrapper__content">
//             <p class="wrapper__result">count: <span class="wrapper__count">0</span></p>
//           </div>
//         </div>
//         <button class="button button__reset">Сброс</button>
//       </section>
//     </body>

//   </html>
//   * {
//     margin: 0;
//     padding: 0;
//     box- sizing: border - box;  
// }  

// body {
//   width: 100vw;
//   background - color: #0e0e13;
//   color: #fafafa;  

//     ::selection {
//     background: #5b28b9;
//     border - radius: 15px;
//     padding: 25px;
//   }
// }  

// section {
//   display: flex;
//   flex - direction: column;
//   gap: 10px;
//   padding: 12px;
//   width: 100 %;
//   max - width: 720px;
//   margin: 0 auto;
//   border: 1px solid #333;
// }  

// .title {
//   border: 1px solid #333;
//   border - radius: 5px;
//   text - align: center;
//   font - size: 32px;
//   font - weight: bold;
//   line - height: 140 %;
// }  

// .wrapper {
//   width: 100 %;
//   gap: 10px;
//   display: flex;
//   justify - content: space - between;
//   height: 100 %;
// }  

// .wrapper__buttons {
//   width: 100 %;
//   display: flex;
//   flex - direction: column;
//   gap: 10px;
// }  

// .wrapper__content {
//   width: 100 %;
//   padding: 12px;
//   color: #fafafa;
//   border - radius: 5px;
//   min - height: 100 %;
//   border: 1px solid #333;
// }  

// .button {
//   background: transparent;
//   color: #fafafa;
//   font - weight: 400;
//   font - size: 18px;
//   line - height: 120 %;
//   text - align: center;
//   padding: 6px;
//   border - radius: 5px;
//   border: 1px solid #333;
//   cursor: pointer;  

//     &:active {
//     background: #333;
//   }
// }  

// .button__reset {
//   color: red;
// }  

// .wrapper__count {
//   color: red;
//   font - size: 22px;
// }  

// .-focus - {
//   background: #444;
// }

//   .- active - {
//   color: yellow;
// }  

// p {
//   display: flex;
//   gap: 10px;
//   align - items: center;
//   margin: 0;
//   padding: 0;
// }  