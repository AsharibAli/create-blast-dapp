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

  // Default network configuration
  defaultNetwork: "blast-sepolia",

  // Etherscan API configuration
  etherscan: {
    apiKey: {
      blast_sepolia: "blast_sepolia",
    },
    customChains: [
      {
        network: "blast_sepolia",
        chainId: 168587773,
        urls: {
          apiURL:
            "https://api.routescan.io/v2/network/testnet/evm/168587773/etherscan",
          browserURL: "https://testnet.blastscan.io",
        },
      },
    ],
  },

  // Sourcify integration configuration
  sourcify: {
    enabled: true,
  },

  // Network configuration
  networks: {
    "blast-sepolia": {
      url: "https://sepolia.blast.io",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },

  // Paths for various Hardhat directories
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
