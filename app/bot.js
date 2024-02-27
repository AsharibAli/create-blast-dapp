"use client";
import React, { useEffect } from "react";

const BlastChatBot = () => {
  useEffect(() => {
    // Dynamically import the Chatbot script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js";
    script.type = "module";
    script.onload = () => {
      // Initialize the Chatbot once the script is loaded
      Chatbot.init({
        chatflowid: "c23f0756-8009-4f9b-9d85-9395d04a9d8e",
        apiHost: "https://flowise-r1c3.onrender.com",
        chatflowConfig: {
          // topK: 2
        },
        theme: {
          button: {
            backgroundColor: "#FCFC03",
            right: 20,
            bottom: 20,
            size: "large",
            iconColor: "black",
            customIconSrc:
              "https://raw.githubusercontent.com/AsharibAli/FlowiseChatEmbed/main/images/blast.png",
          },
          chatWindow: {
            welcomeMessage:
              "Welcome to the Blast AI Chatbot! I'm here to assist you with any general questions or coding query  you have about the Blast L2 Chain.",
            backgroundColor: "#ffffff",
            height: 700,
            width: 400,
            fontSize: 16,
            poweredByTextColor: "#000000",
            botMessage: {
              backgroundColor: "#FCFC03",
              textColor: "#000000",
              showAvatar: true,
              avatarSrc:
                "https://raw.githubusercontent.com/AsharibAli/FlowiseChatEmbed/main/images/blast.png",
            },
            userMessage: {
              backgroundColor: "#000000",
              textColor: "#ffffff",
              showAvatar: true,
              avatarSrc:
                "https://raw.githubusercontent.com/AsharibAli/FlowiseChatEmbed/main/images/usericon.png",
            },
            textInput: {
              placeholder: "Type your question",
              backgroundColor: "#ffffff",
              textColor: "#000000",
              sendButtonColor: "#000000",
            },
          },
        },
      });
    };
    document.body.appendChild(script);
  }, []); // The empty array ensures this effect runs only once
};

export default BlastChatBot;
