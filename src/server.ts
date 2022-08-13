import express from 'express';
import "express-async-errors";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import './database'
import './shared/container'
import { router } from './routes';
import { processError } from './middlewares/apiErrorProcess';

const porta = 3333;

const app = express()

app.use(express.json())

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)
app.use(processError);

app.listen(porta, ()=> console.log(`projeto rodando na porta ${porta}`))