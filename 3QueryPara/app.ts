import express from "express";

const app = express();

const products = [
    { id: 1, name: "iPhone 16", category: "mobile", price: 90000 },
    { id: 2, name: "Samsung S25", category: "mobile", price: 80000 },
    { id: 3, name: "MacBook Pro", category: "laptop", price: 18000 },
    { id: 4, name: "Dell XPS", category: "laptop", price: 120000 }
];

app.get("/products", (req, res) => {
    const { category, minPrice, maxPrice } = req.query;
    let result = products;
    if (category) {
        result = result.filter(p => p.category === String(category));
    }
    if (minPrice) {
        result = result.filter(p => p.price >= Number(minPrice));
    }
    if (maxPrice) {
        result = result.filter(p => p.price <= Number(maxPrice));
    }
    res.json(result);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});