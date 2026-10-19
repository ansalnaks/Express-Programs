import express, { type Application,type Request,type Response } from "express";

const app: Application = express()

app.use(express.json())

app.post('/student', (req:Request, res:Response) => {
    console.log(req.body);
    res.send(req.body)

})
const port:number=6000
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})