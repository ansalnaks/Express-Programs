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

    res.json(student);

});

app.listen(6000);