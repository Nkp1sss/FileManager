import { stdin, stdout } from 'process';

const username = process.argv.find((arg) => arg.startsWith('--username')).split('=')[1];
console.log(`Welcome to the File Manager, ${username}!`);

stdin.on('data',  data => {
  data.toString().trim() === '.exit' && exit();
});

process.on('SIGINT', () => exit());

const exit = () => {
  stdout.write(`Thank you for using File Manager, ${username}, goodbye!\n`);
  process.exit();
};
