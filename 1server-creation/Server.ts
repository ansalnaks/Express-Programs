import express from "express" ;

const app = express();
 //npm install express
app.post("/student", (req, res) => {
    res.send("Welcome Home page");
});

const PORT = 3000;//http://localhost:3000/student

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

