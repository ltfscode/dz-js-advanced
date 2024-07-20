'use strict'

function rollDice(diceType) {
  let maxValue;

  switch (diceType) {
    case 'D4':
      maxValue = 4;
      break;
    case 'D6':
      maxValue = 6;
      break;
    case 'D8':
      maxValue = 8;
      break;
    case 'D10':
      maxValue = 10;
      break;
    case 'D12':
      maxValue = 12;
      break;
    case 'D16':
      maxValue = 16;
      break;
    case 'D20':
      maxValue = 20;
      break;
    default:
      throw new Error('Неподдерживаемый тип костей');
  }

  return Math.floor(Math.random() * maxValue + 1);
} 

console.log(rollDice('D4'));