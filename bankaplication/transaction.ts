import * as express from "express";
//import * as bodyparser from "body-parser";
let transaction:any= express.Router();
//app.use(bodyparser.json());
//app.use( bodyparser.urlencoded({extended:false}) );
let auth:any =(req:any,res:any,next:any):any=>
{
   let allHeaders=req.headers;
   let token:any =allHeaders.token;
   if(token==="java")
   {
    next();
   }
   else
   {
   res.status(401).json({auth:"Failed"});
   }
};
let auth1:any =(req:any,res:any,next:any):any=>
{
   let allHeaders=req.headers;
   let wish:any =allHeaders.wish;
   if(wish==="spring")
   {
    next();
   }
   else
   {
   res.status(401).json({auth1:"Failed"});
   }
};

transaction.post("/signin",[auth],[auth1],(req:any,res:any):any=>
{
    res.send("server success");
});


export default transaction;