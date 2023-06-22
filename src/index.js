import readline from "readline/promises";

import { getNameByArg } from './utils/index.js';

const username = getNameByArg(process.argv);
console.log(`Welcome to the File Manager, ${username}!`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const exit = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
}

rl.on("line", (line) => {
  switch (line.trim()) {
    case '.exit':
      exit();
      break;
    default:
      break;
  }

  console.log(`You are currently in ${process.cwd()}`);
});

rl.on("SIGINT", () => exit());
