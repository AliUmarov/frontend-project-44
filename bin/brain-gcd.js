#!/usr/bin/env node
import readlineSync from 'readline-sync';
import gcd from 'gcd';
import { greeting, name } from '../src/index.js';

function findNOD() {
  greeting();
  console.log('Find the greatest common divisor of given numbers.');

  let SCORE = 0;
  for (let i = 0; i < 3; i += 1) {
    let correctAnswer;
    const firstNum = Math.round(Math.random() * 10);
    const secondNum = Math.round(Math.random() * 15);
    const answer = readlineSync.question(`Question: ${firstNum} ${secondNum} `);
    correctAnswer = gcd(firstNum, secondNum);
    if (!Number(answer)) {
      return console.log('Incorrect input! Answer must be a number!');
    }
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      SCORE += 1;
      console.log(`Your answer ${answer}`);
    } else if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return SCORE === 3 ? console.log(`Congratulations, ${name}`) : '';
}

findNOD();
