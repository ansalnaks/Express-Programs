import express, { type Application,type Request,type Response } from "express";

const app:Application = express(); 

app.get("/users", (req:Request, res:Response) => {
    res.send("Fetching all users");
});

// route parameters

app.put("/users/:id", (req:Request, res:Response) => {
    res.send(`User ${req.params.id} updated completely`);
});

app.patch("/users/:id", (req:Request, res:Response) => {
    res.send(`User ${req.params.id} patched partially`);
});


app.delete("/users/:id", (req:Request, res:Response) => {
    res.send(`User ${req.params.id} deleted`);
});

app.get("/users/:course/:id", (req, res) => {
    const { course, id } = req.params;
    res.json({ course, id });
});

app.listen(6000, () => {
    console.log("Server running on port 6000");
});