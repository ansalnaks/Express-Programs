import express, { type Application,type NextFunction,type Request,type Response } from "express";

const app:Application = express();

app.use((req:Request, res:Response, next:NextFunction) => {
    console.log("Application Middleware");
    next();
});

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("about Page");
});

const port:number=6000
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});


