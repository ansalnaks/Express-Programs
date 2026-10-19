import express, { type Application,type Request,type Response } from "express";

const app:Application = express();

app.use(express.json());  //builtin middleware to parse incoming JSON data

app.post("/student", (req:Request, res:Response) => {

    res.json(req.body);

});

app.listen(6000);


// express.urlencoded()
// express.static()