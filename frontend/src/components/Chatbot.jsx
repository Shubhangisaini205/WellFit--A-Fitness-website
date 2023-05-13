

import { useEffect, useRef, useState } from "react";


import logo from "../images/HD-Logo.png"
import axios from "axios";
import "./css/chatbot.css";
import { Box, Button, Flex, Image, Spinner, Text, Textarea } from "@chakra-ui/react";
import {Dictaphone} from "./Dictaphone";

const init={
  role: "system",
      content:" Manager of Vastram Eccomerce Website"
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





    return <div>



<Box class="chat">

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
  </Box>

    </div>
  }
  