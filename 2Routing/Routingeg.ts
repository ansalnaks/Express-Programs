import express, { type Application } from "express";
import { type Request,type Response } from "express";

const app:Application = express();

app.get("/", (req:Request, res:Response) => {
    res.status(202).json({"message":"Welcome Home page"});
});

app.get("/about", (req, res) => {
    res.status(202).send("Welcome to about page");
});

app.get("/contact", (req, res) => {
    res.status(202).send("Contact us contact123@gmail.com");
});

app.use((req, res) => {
    res.status(404).send("Page not Found");
});

const port: number = 6000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});