#!/usr/bin/env node
import readlineSync from 'readline-sync';

function evenOrNot() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  const YES = 'yes';
  const NO = 'no';
  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const num = Math.round(Math.random() * 10);
    const answer = readlineSync.question(`Question: ${num} `);
    if (answer !== YES && answer !== NO) {
      console.log('Incorrect input! Please, try again!');
      break;
    }
    if ((num % 2 === 0 && answer === YES) || (num % 2 !== 0 && answer === NO)) {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
      count += 1;
    } else if ((num % 2 === 0 && answer === NO) || (num % 2 !== 0 && answer === YES)) {
      console.log(`Your answer: ${answer}`);
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === YES ? NO : YES}'.'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  return count === 3 ? console.log(`Congratulations, ${name}`) : '';
}

evenOrNot();
