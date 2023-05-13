const mongoose = require("mongoose")


const userSchema = mongoose.Schema(
    {
       name:{type:String,required:true},
       email:{type:String,required:true},
       password:{type:String,required:true},
       gender:{type:String,required:true},
       age:{type:Number,required:true},
       height:{type:Number,required:true},
       weight:{type:Number,required:true},
       disease:{type:String,required:true},
    },{
        versionKey:false
    }
)

const UserModel = mongoose.model("user", userSchema)


module.exports = {
    UserModel
}


