//Router mid
//Router middleware is middleware attached to an Express Router using router.use(), so it runs for all routes within that router.
import express, { type Application } from "express";
import userRoute from "./product.js";

const app: Application = express();

app.use("/api", userRoute);

const port = 6000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

