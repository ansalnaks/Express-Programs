// import express, { type NextFunction } from "express";

// const app = express();

// app.use((req, res, next:NextFunction) => {

//     console.log("Time:", new Date().toLocaleString());
//     console.log("Method:", req.method);
//     console.log("URL:", req.url);

//     next();

// });

// app.get("/", (req, res) => {
//     res.send("Home");
// });

// app.get("/about",(req,res)=>{
//     res.send("Welcome about page")
// })

// const port=6000
// app.listen(port,()=>{
//     console.log(`server running on port ${port}`);
// });



import express, { type Application, type NextFunction, type Request, type Response,} from "express";
const app: Application = express();
// Middleware 1
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware 1: Request Received");
  next();
});
// Middleware 2
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Middleware 2: ${req.method} ${req.url}`);
  next();
});
// Middleware 3
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware 3: Authentication Check (Demo)");
  next();
});

app.get("/home", (req: Request, res: Response) => {
  res.send("Home Page");
});


app.get("/about", (req: Request, res: Response) => {
  res.send("About Page");
});

const port: number = 6000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});