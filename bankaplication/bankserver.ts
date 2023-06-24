import * as express from "express";
import accounts from "./accounts";
import cards from "./cards";
import transaction from "./transaction";
 let app:any =express();
 app.use("/acc",accounts);
 app.use("/tra",transaction);
 app.use("/car",cards);
 app.listen(8081,()=>
 {
    console.log("bank transactions succesfull")
 })

