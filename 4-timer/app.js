// Создание таймера обратного отсчета до конца года
let timer = document.getElementById('timer');
let endDate = new Date('January 1, 2025 23:59:59');

function updateTimer() {
  let now = new Date();
  let timeDiff = endDate - now;
  let months = Math.floor(timeDiff / (30 * 24 * 60 * 60 * 1000));
  let days = Math.floor((timeDiff % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
  let hours = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);
  timer.innerHTML = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

setInterval(updateTimer, 1000);