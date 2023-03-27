const express= require('express');
const mongoose=require("mongoose");
const {connection,DataModel}=require('./db')

const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.end("Hellloo.....")
})
app.get("/table",async(req,res)=>{
    const query=req.query;
    const data=DataModel.find(query);
    console.log(query);
    res.end((await data).toString())
})
app.get("/table/:id",(req,res)=>{
    console.log(req.params.id);
   const data=DataModel.find({_id:req.params.id})
    res.end(data.toString())
   //res.end("i am dynamic route for table")
})
app.post("/table/post",async(req,res)=>{
    const data=new DataModel(req.body);
    await DataModel.insertMany(data)
    console.log(data);
    res.write("The below data has been added")
    res.end(data.toString())
})

app.listen("3000",async()=>{
    try{
       await connection
       console.log("server is running on port 3000");
    }
    catch(err){
       console.log(err);
    }
})
