import express, { type Application,type Request,type Response } from "express" ;

const app:Application = express();
 //npm install express
app.post("/student", (req:Request, res:Response) => {
    res.send("Welcome Home page");
});

const PORT = 3000;//http://localhost:3000/student

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

