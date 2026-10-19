import express, { type Application } from "express";

const app: Application = express();

app.use(express.json());

type product={
    id:number,name:string,price:number,quantity:number
}


let products:product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 65000,
        quantity: 10
    },
    {
        id: 2,
        name: "Mobile",
        price: 25000,
        quantity: 20
    }
];


app.get("/products", (req, res) => {

    res.status(200).json({
        message: "Products fetched successfully",
        products
    });

});


app.get("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json({
        message: "Product fetched successfully",
        product
    });

});


app.post("/products", (req, res) => {

    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });

});



app.put("/products/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products[index] = {
        id: id,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    };

    res.status(200).json({
        message: "Product updated successfully",
        product: products[index]
    });

});


app.patch("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(product => product.id === id);
    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }
    if (req.body.name) {
        product.name = req.body.name;
    }
    if (req.body.price) {
        product.price = req.body.price;
    }
    if (req.body.quantity) {
        product.quantity = req.body.quantity;
    }
    res.status(200).json({
        message: "Product updated partially", product
    });

});


app.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }
    products.splice(index, 1);
    res.status(200).json({
        message: "Product deleted successfully", products
    });
});



app.use((req, res) => {
res.status(404).json({message: "Route Not Found"});
});

app.listen(6000, () => {
    console.log("Server running on http://localhost:6000");
});