import express, { type Application } from "express";

const app:Application = express();

app.use(express.json());

let students: any[] = [];

app.post("/student", (req, res) => {

    students.push(req.body);

    res.status(200).json({"message":"student added",students});
});

















app.get("/student",(req,res)=>{
    res.json({"message":"fetched",students})
})

app.listen(6000);