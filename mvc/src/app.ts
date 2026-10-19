import express, {type Application } from "express";
import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors())

// Register Routes
app.use("/api", authRoutes);
app.use("/api",movieRoutes)

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});