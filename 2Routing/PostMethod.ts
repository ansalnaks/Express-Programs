import express, { type Application,type Request,type Response } from "express";

const app:Application = express();

app.use(express.json());

let students: any[] = [];

app.post("/student", (req:Request, res:Response) => {

    students.push(req.body);

    res.status(200).json({"message":"student added",students});
});




app.get("/student",(req:Request,res:Response)=>{
    res.json({"message":"fetched",students})
})

app.listen(6000);