import {type Request,type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { users } from "../models/userModel.js";
import type { User } from "../types/user.js";

const SECRET_KEY = "mysecretkey";

// Register
export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    const existingUser = users.find((user: User) => user.email === email);
    if (existingUser) {
        return res.status(400).json({
            message: "Email already exists"
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
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
};



// Login
export const login = async (req: Request, res: Response) => {
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
    const token = jwt.sign({id: user.id,email: user.email }, SECRET_KEY, {expiresIn: "1h" } );
    res.status(200).json({
        message: "Login Successful",
        token
    });
};



// Get Users
export const getUsers = (req: Request, res: Response) => {
    const userList = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email
    }));
    res.json(userList);
};