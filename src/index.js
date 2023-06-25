import readline from "readline/promises";
import os from 'os';

import { getName } from './utils/getName.js';
import { ls } from "./navigation/ls.js";
import { cd } from "./navigation/cd.js";
import { up } from "./navigation/up.js";
import { cat } from "./operations/cat.js";
import { add } from "./operations/add.js";
import { rn } from "./operations/rn.js";
import { cp } from "./operations/cp.js";
import { mv } from "./operations/mv.js";
import { rm } from "./operations/rm.js";
import { osInfo } from "./os/index.js";

const username = getName(process.argv);
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
  const [command, arg1, arg2] = line.split(' ');

  switch (command) {
    case '.exit':
      exit();
      return;
    case 'ls':
      await ls();
      break;
    case 'cd':
      await cd(arg1);
      break;
    case 'up':
      await up();
      break;
    case 'cat':
      await cat(arg1);
      break;
    case 'add':
      await add(arg1);
      break;
    case 'rn':
      await rn(arg1, arg2);
      break;
    case 'cp':
      cp(arg1, arg2);
      break;
    case 'mv':
      mv(arg1, arg2);
      break;
    case 'rm':
      rm(arg1);
      break;
    case 'os':
      osInfo(arg1);
      break;
    default:
      console.log('Invalid input')
      break;
  }

  console.log(`You are currently in ${process.cwd()}`);
});

rl.on("SIGINT", () => exit());
