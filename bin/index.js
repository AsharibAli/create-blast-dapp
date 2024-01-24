#!/usr/bin/env node

const chalk = require("chalk");
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
if (!repoName) {
  console.error("Please provide a repository name as the second argument");
  process.exit(-1);
}
const gitCheckoutCommand = `git clone --depth 1 https://github.com/asharibali/create-blast-dapp ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  console.error(`Failed to clone repository ${repoName}`);
  process.exit(-1);
}

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) {
  console.error(`Failed to install dependencies for ${repoName}`);
  process.exit(-1);
}

console.log(chalk.yellow("\n-----------------------"));
console.log(chalk.green(`\nSuccess! 🎉`));
console.log("\nFollow the installation guide in README.md");
console.log("\nPlease begin by typing the following commands:");
console.log(chalk.cyan("\ncd"), `${repoName}`);
console.log(
  chalk.yellow(
    "⚠️ Please create .env file in the root dir and paste your Metamask private key:"
  )
);
console.log(chalk.cyan("PRIVATE_KEY="), "<YOUR_KEY>");
console.log(chalk.cyan("\t npx hardhat compile"));
console.log(chalk.cyan("\t npx hardhat test"));
console.log(
  chalk.cyan("npx hardhat run scripts/deploy.js"),
  chalk.cyan("scripts/deploy.js")
);
console.log(chalk.cyan("npm start"));
console.log("\nHappy hacking!");
console.log(chalk.yellow("\n-----------------------"));
