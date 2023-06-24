import * as express from "express";
import * as bodyparser from "body-parser";
let app:any= express();
app.use(bodyparser.json());
app.use( bodyparser.urlencoded({extended:false}) );
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

app.post("/signin",[auth],(req:any,res:any):any=>
{
    if(req.body.uname === "bahu"&&req.body.upwd === "ball")
    {
    res.status(200).json({name:"sree"});
    }
   else
    {
    res.status(401).json({signin:"Failed"});
    }
});
app.listen(process.env.PORT,()=>
{
console.log("success");
});