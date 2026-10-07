import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

import PoiRouter from "./router/PoiRouter.js"

const app = express()
app.use(express.json());
app.use(cors)

app.use('/pois', PoiRouter);

const port = process.env.API_PORT || 3000;

app.listen(port, ()=> {
    console.log(`Aplicação rodando na porta ${port}`)
})