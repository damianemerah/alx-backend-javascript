// process.stdout.write('Welcome to Holberton School, what is your name?\n');

// process.stdin.on('readable', () => {
//   const data = process.stdin.read();

//   if (data) {
//     process.stdout.write(`Your name is: ${data}`);
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('This important software is now closing\n');
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  rl.close();
});
