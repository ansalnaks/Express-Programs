// Logs HTTP request details in the terminal.
// Morgan is a request logging middleware.It automatically logs details about every HTTP request received by your Express server.

import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
// app.use(morgan("short")); 

app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(3000);