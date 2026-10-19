import express, {type Application,type Request,type Response } from "express";

// bcrypt is a third-party password hashing library for Node.js. It securely converts plain-text passwords into hashed strings before storing them.
import bcrypt from "bcryptjs";

// JWT (JSON Web Token) is a secure token used for authentication.
import jwt from "jsonwebtoken";

const app: Application = express();

app.use(express.json());

const SECRET_KEY = "mysecretkey";


type User ={
    id: number;
    name: string;
    email: string;
    password: string;
}


const users: User[] = [];

app.post("/register", async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({
            message: "Email already exists"
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10); //10 is cost factor or salt round
    const newUser: User = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword
    };
    users.push(newUser);
    res.status(201).json({
        message: "User Registered Successfully",
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        }
    });

});

// Login

app.post("/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid Password"
        });
    }
  // Generate JWT
    const token = jwt.sign( {id: user.id,email: user.email }, SECRET_KEY, {expiresIn: "1d"});
    res.status(200).json({
        message: "Login Successful",
        token
    });

});



app.get("/users", (req: Request, res: Response) => {
    const userList = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email
    }));
    res.json(userList);
});


app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});