import  * as express from "express";
let accounts:any = express.Router();
accounts.get(("/"),(req:any,res:any):any=>
{
    res.status(200).json({accounts:"opened"});

});
accounts.get("/login",(req:any,res:any):any=>
{
    if(req.query.uname==="sreekanth"&&req.query.upwd==="kumar")
    {
    res.status(200).json({accounts:"succ"});
    }
    else
    {
        res.status(401).json({accounts:"fail"});

    }

});
export default accounts;
