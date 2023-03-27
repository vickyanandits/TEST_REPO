const mongoose=require("mongoose");


const connection=mongoose.connect("mongodb://127.0.0.1:27017/tablecrud");
const sampleSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const DataModel=mongoose.model("employee",sampleSchema)


module.exports={connection,DataModel};