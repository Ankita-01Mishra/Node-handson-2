const express=require('express')

const app=express()

const fs=require('fs')
const path=require('path')

app.get("/",(req,res)=>{
    res.send("I am on the homePage")
    res.end();
});
app.get("/gallery",(req,res)=>{
    res.send("I am on the gallery")
    res.end();
});

app.post("/submit",(req,res)=>{
    res.send('Data submitted')
    res.end()
});


app.listen(3001,()=>{
    console.log('Listen Ankita...Application has started on port 3001');
})

//express projectName