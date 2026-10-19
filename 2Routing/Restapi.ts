import express, { type Application ,type Request,type Response} from "express";

const app:Application = express();

app.get("/products", (req:Request, res:Response) => {
    res.send("View Products");
});

app.post("/products", (req:Request, res:Response) => {
    res.send("Product Added");
});

app.put("/products/1", (req:Request, res:Response) => {
    res.send("Product Updated");
});

app.delete("/products/1", (req:Request, res:Response) => {
    res.send("Product Deleted");
});
const PORT:number=6000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});