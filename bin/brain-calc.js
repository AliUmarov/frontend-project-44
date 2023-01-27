#!/usr/bin/env node
import readlineSync from 'readline-sync';

function calculator() {
  const symbol = ['+', '-', '*'];
  let SCORE = 0;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const firstOperand = (Math.round(Math.random() * 5));
    const secondOperand = (Math.round(Math.random() * 10));
    const randomSymbol = Math.floor(Math.random() * symbol.length);
    const operation = symbol[randomSymbol];
    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = Math.abs(firstOperand + secondOperand);
        break;
      case '-':
        correctAnswer = Math.abs(firstOperand - secondOperand);
        break;
      case '*':
        correctAnswer = Math.abs(firstOperand * secondOperand);
        break;
      default:
        return 0;
    }
    const answer = readlineSync.question(`Question: ${firstOperand} ${operation} ${secondOperand} `);
    console.log(`Your answer: ${answer}`);
    if (!Number(answer)) {
      return console.log('Incorrect input! Please, try again!');
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

calculator();
