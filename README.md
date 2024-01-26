<p align="center">
    <img align="center" src="https://assets-global.website-files.com/65a6baa1a3f8ed336f415cb4/65a6ceece21ac0bdde447011_Blast%20Logo%20Black.svg" width="175"></img>
</p>

<h1 align="center">create-blast-dapp</h1>

<div align="center">
    <img src="https://img.shields.io/badge/platform-blast-yellow.svg?style=flat-square" alt="Platform">
    <img src="https://img.shields.io/github/license/asharibali/create-blast-dapp?color=yellow&style=flat-square " alt="License">
    <img src="https://img.shields.io/npm/dw/create-blast-dapp?style=flat-square&color=yellow" alt="Downloads">
</div><br>

A full-stack starter template featuring Next & Hardhat with a built-in Blast AI Chatbot, designed for building `Dapps`, as well as developing, deploying, testing, and verifying Solidity smart contracts on the Blast L2 chain. This starter kit includes pre-installed packages such as `create-next-app`, `hardhat full code`, `tailwindcss`, `web3.js`, and more.

## 📺 Quickstart

<div align="center">
</div>

## 🛠️ Installation guide 


### ⌛️ create-blast-dapp command

Open up your terminal (or command prompt) and type the following command:

```sh
npx create-blast-dapp <your-dapp-name>

# cd into the directory
cd <your-dapp-name>
```

### 📜 Smart Contracts

All smart contracts are located inside the Hardhat folder, which can be found in the root directory. To get started, first install the necessary dependencies by running:

```sh
# cd into the hardhat directory
cd hardhat

npm install
```

### 🔑 Private key

Ensure you create a `.env` file in the `hardhat` directory. Then paste your [Metamask private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) in `.env` with the variable name `PRIVATE_KEY` as follows:

```sh
PRIVATE_KEY=0x734...
```

### ⚙️ Compile

Now, you can write your contracts in `./contracts/` directory, replace `Greeter.sol` with `<your-contracts>.sol` file. To write tests, go to `./test` directory and create `<your-contracts>.js`.

```sh
# for compiling the smart contracts
npx hardhat compile

# for testing the smart contracts
npx hardhat test
```

After successful compilation, the artifacts directory will be created in `./artifacts` with a JSON `/contracts/<your-contracts>.sol/<your-contracts>.json` containing ABI and Bytecode of your compiled smart contracts.


### ⛓️ Deploy

Before deploying the smart contracts, ensure that you have added the [`Blast Sepolia Testnet`](https://docs.blast.io/building/network-information) to your MetaMask wallet and that it has sufficient funds. If you do not have testnet $ETH on Blast Sepolia, please follow this [faucets guide](https://docs.blast.io/tools/faucets).

Also, make changes in `./scripts/deploy.js` (replace the greeter contract name with `<your-contract-name>`).

For deploying the smart contracts to `blast sepolia testnet` network, type the following command:

```sh
npx hardhat run scripts/deploy.js
```

Copy-paste the deployed contract address [here](https://github.com/asharibali/create-blast-dapp/blob/main/app/page.js#L37).

```sh
<your-contract> deployed to: 0x...
```

### ✅ Verify

To verify the deployed smart contract on Blast Sepolia, execute the following command:

```sh
# for verifying the smart contracts
npx hardhat verify <deployed-contract-address>
```

### 💻 Next.js client

Start the Next.js app by running the following command in the `root` directory:

```sh
npm run dev
# Starting the development server...
```


## ⚖️ License

create-blast-dapp is licensed under the [MIT License](https://github.com/AsharibAli/create-blast-dapp/blob/main/LICENSE.md).

<hr>
Don't forget to star this repositry ⭐️ and Follow on X ~ <a href="https://twitter.com/0xAsharib" target="_blank"><img src="https://img.shields.io/twitter/follow/0xAsharib?style=social" alt="twitter" /></a>
