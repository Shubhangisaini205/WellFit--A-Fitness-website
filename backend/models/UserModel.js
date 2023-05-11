const mongoose = require("mongoose")


const userSchema = mongoose.Schema({

})

const  UserModel = mongoose.model("user",userSchema)


module.exports ={
    UserModel
}


