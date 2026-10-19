// Error-handling middleware is a special middleware that catches and handles errors in one central place instead of writing error handling code in every route.

import express, { type Application ,type Request,type Response, type NextFunction} from "express";

const app:Application = express();

app.get("/", (req:Request, res:Response, next:NextFunction) => {
    const error = new Error("Something went wrong");
    next(error);
});

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    res.status(500).json({
        success: false,
        message: err.message
    });
});

app.listen(3000);




// import express from "express";

// const app = express();

// app.get("/users", (req, res) => {

//     try {
//         throw new Error("Database Connection Failed");
//     } catch (error: any) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// });

// app.get("/products", (req, res) => {
//     try {
//         throw new Error("Product Not Found");
//     } catch (error: any) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// });

// app.listen(3000);