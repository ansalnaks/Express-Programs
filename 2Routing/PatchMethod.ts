import express, { type Application,type Request,type Response } from "express";

const app:Application = express();

app.use(express.json());

let student = {
    id:1,
    name:"Anu",
    age:22
};

app.patch("/stu", (req:Request, res:Response) => {

    if(req.body.name){
        student.name = req.body.name;
    }
    if(req.body.age){
        student.age = req.body.age;
    }

    res.status(200).json({"message": "student updated", student});

});

app.listen(6000);