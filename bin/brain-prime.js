#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, name } from '../src/index.js';

function isThisPrime() {
  greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let SCORE = 0;
  let correctAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const num = Math.round(Math.random() * (20 - 2) + 2);
    for (let k = 2; k < num; k += 1) {
      if (num % k === 0) {
        correctAnswer = 'no';
        break;
      }
      correctAnswer = 'yes';
    }
    const answer = readlineSync.question(`Question: ${num} `);
    if (answer !== 'yes' && answer !== 'no') {
      return console.log('Incorrect input! Please, try again!');
    }
    if (answer === correctAnswer) {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
      SCORE += 1;
    } else {
      console.log(`Your answer: ${answer}`);
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.'`);
      console.log(correctAnswer);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return SCORE === 3 ? console.log(`Congratulations, ${name}`) : '';
}

isThisPrime();
