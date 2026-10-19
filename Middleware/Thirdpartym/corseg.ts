// Third-party middleware is middleware created by other developers or organizations.Need to install it, using npm.


// Cors

// It allows a frontend and backend running on different origins (different domain, port, or protocol) to communicate.
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("CORS Enabled");
});

const port=6000
app.listen(port,()=>{
    console.log(`server running port ${port}`);
});