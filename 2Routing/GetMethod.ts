import express, { type Application,type Request,type Response} from "express";

const app:Application = express();

const students = [
    "Anu",
    "Rahul",
    "Akhil"
];

app.get("/student", (req:Request, res:Response) => {
    res.status(200).json({"message": "get students",  students});
});

const port:number=6000
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})