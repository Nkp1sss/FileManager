import readline from "readline/promises";
import os from 'os';

import { getNameByArg } from './utils/index.js';
import { ls } from "./navigation/ls.js";
import { cd } from "./navigation/cd.js";

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
  line = line.trim();

  if (line === '.exit') {
    exit();
    return;
  } else if (line === 'ls') {
    await ls();
  } else if (line.startsWith('cd ')) {
    await cd(line.split(' ')[1]);
  } else {
    console.log('Invalid input');
  }

  console.log(`You are currently in ${process.cwd()}`);
});

rl.on("SIGINT", () => exit());
