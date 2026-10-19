import express from "express";
import  type{ Request, Response,Application}  from "express";

const app:Application = express();

const PORT = 3000;

// URL: http://localhost:3000/search?keyword=laptop

app.get("/search", (req: Request, res: Response) => {
    const keyword = req.query.keyword;
    res.send(`Searching for: ${keyword}`);
});

app.get("/search", (req, res) => {
    const { category, brand, price } = req.query;
    res.json({ category,brand,price});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});