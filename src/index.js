import readline from "readline/promises";

const username = process.argv.find((arg) => arg.startsWith('--username')).split('=')[1];
console.log(`Welcome to the File Manager, ${username}!`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  switch (line.trim()) {
    case '.exit':
      exit();
      break;
    default:
      break;
  }
  // console.log(`You are currently in ${process.cwd()}`);
});

rl.on("SIGINT", () => exit());

const exit = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
}
