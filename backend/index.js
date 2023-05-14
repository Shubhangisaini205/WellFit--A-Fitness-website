const express = require("express");
const cors = require('cors')
const { connection } = require("./config/db")
const { workoutRouter } = require("./routes/WorkoutRoutes");
const {UserRouter} = require("./routes/UserRoutes")
const {AuthMiddleware}= require("./middlewares/AuthMiddleware");
const { exerciseRouter } = require("./routes/ExerciseRoute");
const app = express();
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
 res.send("OK")
})
app.use("/user",UserRouter)

app.use(AuthMiddleware)
app.use("/workouts",workoutRouter);
app.use("/exercise",exerciseRouter);
app.listen(8080, async()=>{
  
    try {
         await connection
         console.log("connected to DB!!")
    } catch (error) {
        console.log(error)
    }

    console.log("port 8080 is running")
})





