const mongoose=require('mongoose')

const ExerciseSchema=mongoose.Schema({
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
    details:String,
    userId:String,
    username:String,
},{
    versionKey:false
})

const ExerciseModel=mongoose.model("exercise",ExerciseSchema);

module.exports={ExerciseModel};