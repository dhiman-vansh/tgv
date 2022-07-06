const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vansh:Vansh@zeb.5ajdr.mongodb.net/TGV?retryWrites=true&w=majority",
{
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useNewUrlParser:true
}).then(()=>{
    console.log("done connect");
}).catch((e)=>{
    console.log(e)
})

const app = express();
const Name = require('./Models/name')
const port = process.env.PORT || 8000;


app.use(express.json())

app.get("/get", async(req,res)=>{
    
    try{
        const waiting = await Name.find()
        res.status(200).send(waiting)
    }
    catch(e) { res.status.send(e)}
})

app.post("/post",async(req,res)=>{
    
   
    try{
        console.log(req.body)
        const entry  = new Name (req.body)
        const waitentry = await entry.save();
        res.status(200).send(waitentry);
    }
    catch(e){ res.status(400).send(e)}
    res.send("its working "+ req.body)
})

app.listen(port, ()=>{
    console.log('connection is done at port ' + port)
})