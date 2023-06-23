import *as express from "express";
import transaction from "./transaction";
let app :any= express();
app.get("/sreekanth",(req:any,res:any):any=>
{
    res.status(200).json({"name":"sreekanth"});
});
app.use("/mode",transaction);
app.listen(8959,()=>
{
console.log("succesfull");
});