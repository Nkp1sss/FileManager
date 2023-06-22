import readline from "readline/promises";
import os from 'os';

import { getNameByArg } from './utils/index.js';
import { ls } from "./navigation/ls.js";

const username = getNameByArg(process.argv);
console.log(`Welcome to the File Manager, ${username}!\n`);
process.chdir(os.homedir());
console.log(`You are currently in ${process.cwd()}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const exit = () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  rl.close();
}

rl.on("line", async (line) => {
  switch (line.trim()) {
    case '.exit':
      exit();
      return;
    case 'ls':
      await ls();
      break;
    default:
      break;
  }

  console.log(`You are currently in ${process.cwd()}`);
});

rl.on("SIGINT", () => exit());
