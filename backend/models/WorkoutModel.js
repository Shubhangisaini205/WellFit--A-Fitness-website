const mongoose=require('mongoose')

const workoutSchema=mongoose.Schema({
    id:Number,
    exercise_name:String,
    videoURL:Array,
    steps:Array,
    Category:String,
    Difficulty:String,
    Force:String,
    Grips:String,
    target:Object,
    youtubeURL:String,
    details:String
},{
    versionKey:false
})

const WorkoutModel=mongoose.model("workout",workoutSchema);

module.exports={WorkoutModel};