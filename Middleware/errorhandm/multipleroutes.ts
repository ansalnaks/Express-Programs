import express, {type Application,type Request,type Response,type NextFunction} from "express";

const app: Application = express();

app.get("/divide", (req: Request, res: Response, next: NextFunction) => {
  try {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }

    res.send(`Result = ${a / b}`);
  } catch (err) {
    next(err);
  }
});


app.get("/database", (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("Database Connection Failed.");
  } catch (err) {
    next(err);
  }
});


app.get("/login", (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("Invalid Username or Password.");
  } catch (err) {
    next(err);
  }
});


app.get("/payment", (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("Payment Failed.");
  } catch (err) {
    next(err);
  }
});


app.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("Error:", err.message);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});