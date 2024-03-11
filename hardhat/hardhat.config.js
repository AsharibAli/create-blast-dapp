require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");

/**
 * Hardhat configuration
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  // Solidity compiler configuration
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  // Blastexplorer by Routescan API configuration
  // https://blastexplorer.io/documentation/recipes/hardhat-verification
  etherscan: {
    apiKey: {
      blast: "blast", // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: "blast",
        chainId: 81457,
        urls: {
          apiURL:
            "https://api.routescan.io/v2/network/mainnet/evm/81457/etherscan",
          browserURL: "https://blastexplorer.io",
        },
      },
    ],
  },

  // Blastscan by Etherscan API Configuration
  // https://docs.blastscan.io/v/blastscan/

  // Sourcify integration configuration
  sourcify: {
    enabled: true,
  },

  // Network configuration
  networks: {
    // for mainnet
    "blast-mainnet": {
      url: "https://rpc.blast.io/",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
    // for Sepolia testnet
    "blast-sepolia": {
      url: "https://sepolia.blast.io",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
    // for local dev environment
    "blast-local": {
      url: "http://localhost:8545",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
  // Default network configuration
  defaultNetwork: "blast-sepolia",

  // Paths for various Hardhat directories
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
