import express, { type Application } from "express";

const app: Application = express();

app.use(express.json());

let students:any = [
    {
        id: 1,
        name: "Anu",
        age: 22
    },
    {
        id: 2,
        name: "Meera",
        age: 21
    }
];


// GET - Fetch All Students

app.get("/students", (req, res) => {
    res.status(200).json({message: "Students fetched successfully",students});
});


// POST 
app.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(newStudent);
    res.status(201).json({message: "Student added successfully",students});

});


// PUT - Replace First Student
app.put("/students", (req, res) => {
    students[0] = {
        id: 1,
        name: req.body.name,
        age: req.body.age
    };
    res.status(200).json({ message: "Student updated successfully",students });
});


// PATCH - Update First Student
app.patch("/students", (req, res) => {
    if (req.body.name) {
        students[0].name = req.body.name;
    }
    if (req.body.age) {
     students[0].age = req.body.age;
     }
    res.status(200).json({ message: "Student updated partially",students  });
});


// DELETE 
app.delete("/students", (req, res) => {
    students.splice(0, 1);
    res.status(200).json({ message: "Student deleted successfully", students });
});


app.use((req, res) => {
    res.status(404).json({ message: "Route not found"});
});

app.listen(6000, () => {
    console.log("Server running on port 6000");
});