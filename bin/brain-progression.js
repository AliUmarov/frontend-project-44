#!/usr/bin/env node
import readlineSync from 'readline-sync';

function whatNumberIsLost() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What number is missing in the progression?');
  let SCORE = 0;
  const list = [];
  for (let i = 0; i < 3; i += 1) {
    for (let k = 1, min = 22; k <= min; k += 2) {
      list.push(k);
    }
    const index = Math.round(Math.random() * 10);
    const number = list.splice(index, 1, '..');
    const answer = readlineSync.question(`Question: ${list.join(' ')} `);
    if (!Number(answer)) {
      return console.log('Incorrect input! Answer must be a number!');
    }
    if (answer === number.join(' ')) {
      console.log('Correct!');
      console.log(`Your answer ${answer}`);
      SCORE += 1;
      list.splice(0);
    } else if (answer !== number) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer is '${number}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return SCORE === 3 ? console.log(`Congratulations, ${name}!`) : '';
}

whatNumberIsLost();
