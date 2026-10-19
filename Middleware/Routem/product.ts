import express, { type Request, type Response, type NextFunction } from "express";

const router = express.Router();

function checkUser(req: Request, res: Response, next: NextFunction) {
    console.log("Checking User");
    next();
}

router.use(checkUser)
router.get("/profile", (req: Request, res: Response) => {
    res.send("Profile Page");
});

router.get("/about", (req: Request, res: Response) => {
    res.send("About Page");
});

export default router;


