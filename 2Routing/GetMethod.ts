import express, { type Application } from "express";

const app:Application = express();

const students = [
    "Anu",
    "Rahul",
    "Akhil"
];

app.get("/student", (req, res) => {
    res.status(200).json(students);
});

const port:number=6000
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})