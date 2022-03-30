import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
const porta = 3333;


const app = express()

app.use(express.json())

app.use("/categories", categoriesRoutes)

app.listen(porta, ()=> console.log(`projeto rodando na porta ${porta}`))