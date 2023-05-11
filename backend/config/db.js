const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://shubhangi:saini@cluster0.fatrmgn.mongodb.net/WellFitCollective?retryWrites=true&w=majority")

module.exports={
    connection
}

