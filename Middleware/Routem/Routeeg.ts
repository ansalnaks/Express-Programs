// Route specific middleware
// Route middleware is middleware attached to a specific route, so it runs only when that route is accessed.


import express, { type Application ,type Request,type Response,type NextFunction} from "express";

const app:Application = express();

function checkUser(req:Request, res:Response, next:NextFunction) {
    console.log("Checking User");
    next();
}

app.get("/profile", checkUser, (req, res) => {
    res.send("Profile Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

const port=3000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
    
})