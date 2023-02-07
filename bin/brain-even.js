#!/usr/bin/env node
import readlineSync from 'readline-sync';

function evenOrNot() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = Math.round(Math.random() * 10);
    const answer = readlineSync.question(`Question: ${num} `);
    if (answer !== 'yes' && answer !== 'no') {
      return console.log('Incorrect input! Please, try again!');
    }
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
      count += 1;
    } else if ((num % 2 === 0 && answer === 'no') || (num % 2 !== 0 && answer === 'yes')) {
      console.log(`Your answer: ${answer}`);
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.'`);
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return count === 3 ? console.log(`Congratulations, ${name}!`) : '';
}

evenOrNot();
