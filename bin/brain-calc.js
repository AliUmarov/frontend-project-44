#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, name } from '../src/index.js';

function calculator(symbol) {
  greeting();
  console.log('What is the result of the expression?');

  let SCORE = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstOperand = (Math.round(Math.random() * 5));
    const secondOperand = (Math.round(Math.random() * 10));
    const operation = symbol[Math.floor(Math.random() * symbol.length)];

    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = firstOperand + secondOperand;
        break;
      case '-':
        correctAnswer = Math.abs(firstOperand - secondOperand);
        break;
      case '*':
        correctAnswer = firstOperand * secondOperand;
        break;
      default:
        return null;
    }
    const answer = readlineSync.question(`Question: ${firstOperand} ${operation} ${secondOperand} `);
    console.log(`Your answer: ${answer}`);
    if (!Number(answer)) {
      return console.log('Incorrect input! Answer must be a number!');
    }
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      SCORE += 1;
    } else if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return SCORE === 3 ? console.log(`Congratulations, ${name}`) : '';
}

calculator(['+', '-', '*']);
