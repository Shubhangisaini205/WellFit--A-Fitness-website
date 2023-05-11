const express = require("express");
const { connection } = require("./config/db");
const app = express();
app.use(express.json())


app.get("/",(req,res)=>{
 res.send("OK")
})


app.listen(8080, async()=>{
  
    try {
         await connection
         console.log("connected to DB!!")
    } catch (error) {
        console.log(error)
    }

    console.log("port 8080 is running")
})





