import express, { type Application,type Request,type Response } from "express";

const app:Application = express();

let students = [
    {id:1,name:"Anu"},
    {id:2,name:"Rahul"}
];

app.delete("/students",(req:Request, res:Response)=>{

    students = students.filter(student=>student.id!==2);

    res.json(students);

});

app.listen(6000);