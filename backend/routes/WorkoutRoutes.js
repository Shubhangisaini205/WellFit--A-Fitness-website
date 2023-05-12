const {Router}=require('express');
const { WorkoutModel } = require('../models/WorkoutModel');

const workoutRouter=Router();

workoutRouter.get("/",async(req,res)=>{
    try {
        const workouts=await WorkoutModel.find().limit(20);
        res.send(workouts);
    } catch (error) {
        res.send({"msg":error.message});
    }
});

module.exports={workoutRouter};