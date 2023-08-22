const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (userName) => {
  console.log(`Your name is: ${userName}`);
  rl.close();
});