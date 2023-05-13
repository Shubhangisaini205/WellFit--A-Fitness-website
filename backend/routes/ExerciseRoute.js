const {Router}=require('express');
const { ExerciseModel } = require('../models/ExerciseModel');

const exerciseRouter=Router();

exerciseRouter.get("/",async(req,res)=>{
    const {userId}=req.body;
    try {
        const workouts=await ExerciseModel.find({userId});
        res.send(workouts);
    } catch (error) {
        res.send({"msg":error.message});
    }
});

exerciseRouter.post("/add",async(req,res)=>{
    for(let i=0;i<req.body.length;i++){
        req.body[i]["userId"]=req.body.userId;
        req.body[i]["username"]=req.body.username;
    }
    try {
        const exercises = await ExerciseModel.insertMany(req.body);
        console.log(req.body);
        res.send({"msg":"Exercise added!!"})
    } catch (error) {
        res.send(error)
    }
})

module.exports={exerciseRouter};