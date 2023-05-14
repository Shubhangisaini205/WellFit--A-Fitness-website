

import { useEffect, useRef, useState } from "react";


// import logo from "../images/HD-Logo.png"
import axios from "axios";
// import "./css/chatbot.css";
// import { Box, Button, Flex, Image, Spinner, Text, Textarea } from "@chakra-ui/react";
// import {Dictaphone} from "./Dictaphone";

const init={
  role: "system",
      content:" I am Fitness Expert from WellFit "
}


export const Chatbot=()=>{
    const inputRef = useRef(null);
    const [input,setinput]=useState("")
  const [bot,setbot]=useState([init])

  
  const handlesubmit=async(e)=>{
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
  }catch (error) {
    console.error(error);
  }
  
  }





    return (<div>



{/* <Box class="chat">

<Box class="chat-title">
    
    <Flex class="avatar">
      <Image mb={"2%"} m={"auto"} w={"100px"} h={"50px"} src={logo} />
      <Box w={"10%"} m={"auto"}>
  <Dictaphone setinput={setinput}  /> 
  </Box>
      </Flex>
    
  </Box>
 
  <Box  mt={"2%"} class="messages">
    <Box class="messages-content">
     {bot.map((message, index) => (
            <Text key={index}  className={`message-${message.role}`} >
              <Text  fontSize={"1rem"}  >
                {message.content}
              </Text>
            </Text>
          ))}
    
    
    </Box>
  </Box>
  
  <form  style={{marginTop:"24%"}} onSubmit={handlesubmit}>
 

  <Flex class="message-box">

  <Textarea h={"1vh"} type="text" class="message-input"    
    
    placeholder="Ask a question..."
  value={input}
  
  onChange={(e)=>setinput(e.target.value)}
  ref={inputRef}
    ></Textarea>
    <Box w={"9%"} mt={"4.5%"}> 
    <Button style={{backgroundColor:"black" ,padding:"27%", color:"white",borderRadius:"10%",textAlign:"center" }} background={"orange"}  colorScheme={"orange"} type="submit" class="message-submit">Send</Button>
</Box>
    </Flex>


  
  </form>
  </Box> */}

  <div class="chat">
  {/* <div class="chat-title">
    <div class="flex items-center justify-between avatar">
      <img class="mb-2 mx-auto w-100 h-50" src={logo} alt="logo" />
      <div class="w-10/12 mx-auto">
        <Dictaphone setinput={setinput} />
      </div>
    </div> */}
    <div class="flex items-center avatar">
  {/* <img src={logo} alt="avatar" class="mb-2 mx-auto w-40 h-20" />
  <div class="w-1/10 mx-auto">
    <Dictaphone setinput={setinput} />
  </div> */}
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
    <div class="flex items-center message-box">
      <textarea class="flex-1 h-12 py-2 px-3 text-black border-2 border-gray-300 rounded-lg mr-2 focus:outline-none focus:border-blue-400" placeholder="Ask a question..." value={input} onChange={(e) => setinput(e.target.value)} ref={inputRef}></textarea>
      <div class="w-9 mt-2">
        <button type="submit" class="w-full py-2 px-4 bg-black text-white rounded-lg text-center focus:outline-none hover:bg-gray-800">
          Send
        </button>
      </div>
    </div>
  </form>
</div>

  

    )
  }
  