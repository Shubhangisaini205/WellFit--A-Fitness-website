const {Router}=require('express');
const { WorkoutModel } = require('../models/WorkoutModel');

const workoutRouter=Router();

workoutRouter.get("/",async(req,res)=>{
    const {difficulty, target, category}=req.query
    const query={};
    if(difficulty){
        query.Difficulty=difficulty
    }
    if(target){
        query['target.Primary']=target
    }
    if(category){
        query.Category=category
    }
    try {
        const workouts=await WorkoutModel.find(query).limit(20);
        res.send(workouts);
    } catch (error) {
        res.send({"msg":error.message});
    }
});

module.exports={workoutRouter};