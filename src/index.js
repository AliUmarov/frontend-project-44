import readlineSync from 'readline-sync';

export let name;
export function greeting() {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}`);
  name = getName;
}
