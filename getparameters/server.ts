import *as express from "express";

let app :any= express();
app.get("/login",(req:any,res:any):any=>
{
    if(req.query.uname=="encrypt"&&req.query.upwd=="decrypt")
    {
    res.status(200).json({"name":"sreekanth"});
    }
   else
    {
    res.status(400).json({"status":"Failed"});
    }
});

app.listen(8959,()=>
{
console.log("succesfull");
});