

import { useEffect, useRef, useState } from "react";


// import logo from "../images/HD-Logo.png"
import axios from "axios";
// import "./css/chatbot.css";
// import { Box, Button, Flex, Image, Spinner, Text, Textarea } from "@chakra-ui/react";
// import {Dictaphone} from "./Dictaphone";

const init = {
  role: "system",
  content: " I am Fitness Expert from WellFit "
}


export const Chatbot = () => {
  const inputRef = useRef(null);
  const [input, setinput] = useState("")
  const [bot, setbot] = useState([init])


  const handlesubmit = async (e) => {
    e.preventDefault();
    const message = { role: "user", content: input };
    const newdata = [...bot, message];

    setbot(newdata);
    try {

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: newdata,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
          },
        }
      );

      const chatbotMessage = response.data.choices[0].message.content;
      const updatedChatHistory = [
        ...newdata,
        { role: "assistant", content: chatbotMessage },
      ];

      setbot(updatedChatHistory);
      setinput("");
      inputRef.current.focus();
    } catch (error) {
      // console.error(error);
    }

  }





  return (
    <div className="mb-10">
      <div class="chat">
        <div class="flex items-center avatar">
        </div>
      </div>
      <div class="messages mt-2">
        <div class="messages-content">
          {bot.map((message, index) => (
            <div key={index} class={`message ${message.role === 'user' ? 'message-user self-end bg-teal-400 text-white' : 'message-assistant bg-[#171A26] mt-2 text-white'}`}>
              <div class="message-content p-3 rounded-md shadow-md">
                <p class="text-base">
                  {message.content}
                </p>
              </div>
              {message.role === 'user' && (
                <div class="absolute right-0 mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 9H2a1 1 0 110-2h12.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <form class="mt-24" onSubmit={handlesubmit}>
        <div class="flex items-center message-box w-3/4 m-auto">
          <textarea style={{width:"90%"}} class="mt-40 flex-1 h-12 py-2 px-3 text-black border-2 border-gray-300 rounded-lg mr-2 focus:outline-none focus:border-blue-400" placeholder="Ask a question..." value={input} onChange={(e) => setinput(e.target.value)} ref={inputRef}></textarea>
          <div class="w-20 mt-40">
            <button type="submit" class="w-full py-2 px-4 bg-black text-white rounded-lg text-center focus:outline-none hover:bg-gray-800">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>



  )
}
