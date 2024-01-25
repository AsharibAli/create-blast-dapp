"use client";
import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Web3 from "web3";
import Image from "next/image";
// JSON containing ABI and Bytecode of compiled smart contracts
import contractJson from "../hardhat/artifacts/contracts/Greeter.sol/Greeter.json";
import BlastChatBot from "./bot";

function App() {
  const [mmStatus, setMmStatus] = useState("Not connected!");
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState(undefined);
  const [displayMessage, setDisplayMessage] = useState("");
  // eslint-disable-next-line
  const [web3, setWeb3] = useState(undefined);
  const [getNetwork, setGetNetwork] = useState(undefined);
  const [contracts, setContracts] = useState(undefined);
  // eslint-disable-next-line
  const [contractAddress, setContractAddress] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [txnHash, setTxnHash] = useState(null);

  // <div dangerouslySetInnerHTML={{ __html: chatbotScript }} />;

  useEffect(() => {
    (async () => {
      // Define web3
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
      // get networkId
      const networkId = await web3.eth.getChainId();
      setGetNetwork(networkId);
      // INSERT deployed smart contract address
      const contractAddress = "0xfd26DC12f6D5DF85548a560BC853182288906936";
      setContractAddress(contractAddress);
      // Instantiate smart contract instance
      const Greeter = new web3.eth.Contract(contractJson.abi, contractAddress);
      setContracts(Greeter);
      // Set provider
      Greeter.setProvider(window.ethereum);
    })();
  }, []);

  // Connect to Metamask
  async function ConnectWallet() {
    // Check if Metamask is installed
    if (typeof window.ethereum !== "undefined") {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // Get account address
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      setAccountAddress(accounts[0]);
      // Set Metamask status
      setMmStatus("Connected!");
      setIsConnected(true);
    } else {
      alert("Please install Metamask!");
    }
  }

  // Read message from smart contract
  async function receive() {
    // Display message
    var displayMessage = await contracts.methods.read().call();
    setDisplayMessage(displayMessage);
  }

  // Write message to smart contract
  async function send() {
    // Get input value of message
    var getMessage = document.getElementById("message").value;
    setLoading(true);
    // Send message to smart contract
    await contracts.methods
      .write(getMessage)
      .send({ from: accountAddress })
      .on("transactionHash", function (hash) {
        setTxnHash(hash);
      });
    setLoading(false);
  }

  return (
    <div className="App">
      {/* Metamask status */}
      <div className="text-center">
        <h1>
          {getNetwork !== "0xa0c71fd"
            ? "Please make sure you're on the blast sepolia testnet network!"
            : mmStatus}
        </h1>
      </div>
      <hr />
      <h1 className="text-center text-4xl font-bold mt-8">
        create-blast-dapp template 🚀
      </h1>
      {/* Connect to Metamask */}

      <center>
        {isConnected && (
          // Show message if connected
          <div className="text-center text-xl mt-12">
            {/* Show account address */}
            <h1>Connected to {accountAddress}</h1>
          </div>
        )}
        {!isConnected && (
          <>
            <button
              className="bg-yellow-300 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-md mt-8 mb-6"
              onClick={ConnectWallet}
            >
              Connect with Metamask
            </button>
          </>
        )}
      </center>

      {/* Send message */}
      <center className="mt-16">
        <input
          type={"text"}
          placeholder={"Enter message"}
          id="message"
          className="w-60 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <button
          className="text-center bg-yellow-300 hover:bg-yellow-700 text-black font-bold py-1 px-4 rounded ml-3"
          onClick={isConnected && send}
        >
          Send
        </button>
        {/* Receive message */}
        <button
          className="text-center  bg-yellow-300 hover:bg-yellow-700 text-black font-bold py-1 px-3 rounded ml-3"
          onClick={isConnected && receive}
        >
          Receive
        </button>
      </center>
      <p className="text-center text-sm mt-6">
        {loading === true ? (
          <>
            loading...
            <p className="mt-4 text-xs ">
              Txn hash:{" "}
              <a
                className="text-yellow-300"
                href={"https://testnet.blastscan.io/tx/" + txnHash}
                target="_blank"
                rel="noopener noreferrer"
              >
                {txnHash}
              </a>
            </p>
            <p className="mt-2 text-xs">
              Please wait till the Txn is completed :)
            </p>
          </>
        ) : (
          ""
        )}
      </p>
      {/* Display message */}
      <div className="text-center text-3xl mt-10">
        <b>{displayMessage}</b>
      </div>
      {/* Footer developer content */}
      <footer className="footer">
        <Image
          src="https://assets-global.website-files.com/65a6baa1a3f8ed336f415cb4/65a6ceece21ac0bdde447011_Blast%20Logo%20Black.svg"
          alt="logo"
          width="350"
          height="350"
        />
        <h1 className="mt-4 text-xs sm:text-sm text-black">
          Learn more about Blast L2, {""}
          <a
            className="text-yellow-300 no-underline hover:underline hover:text-yellow-700"
            href="https://docs.blast.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Documentation
          </a>
          .
        </h1>
      </footer>
      <div className="fixed right-0 bottom-0">
        <BlastChatBot />
      </div>
    </div>
  );
}

export default App;
