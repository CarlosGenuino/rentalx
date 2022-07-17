import express from 'express';
import { router } from './routes';
const porta = 3333;
const app = express()

app.use(express.json())

app.use(router)

app.listen(porta, ()=> console.log(`projeto rodando na porta ${porta}`))