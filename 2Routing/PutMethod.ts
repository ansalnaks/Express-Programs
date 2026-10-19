import express, { type Application,type Request,type Response } from "express";

const app:Application = express();

app.use(express.json());

let student = {
    id:1,
    name:"Anu",
    age:56
};
app.put("/student/1", (req:Request, res:Response) => {

    student = req.body;

    res.json(student);

});
app.listen(6000);