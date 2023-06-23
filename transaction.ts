import *as express from "express";
let transaction :any= express();
var transactionsData={
"bank":"sbi",
"branch":"delhi"
}
transaction .get("/",(req:any,res:any):any=>
{
    res.status(200).json({"transaction":" 100 rs deposited"});
});
transaction .get("/Tdetails",(req:any,res:any):any=>
{
    res.send(transactionsData);
});
//transaction .listen(8959,()=>
//{
//console.log("succesfull");
//});
//module.exports=transaction;
export default transaction;