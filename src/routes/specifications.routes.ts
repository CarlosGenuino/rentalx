import {Router, Request, Response} from 'express';
import { SpecificationRepository } from '../modules/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/services/CreateSpecificationService';

const specificationsRoutes = Router()

const repo = new SpecificationRepository();
const createService = new CreateSpecificationService(repo);

specificationsRoutes.post('/', (request: Request, response: Response)=> {
    const { name, description } = request.body;

    createService.execute({name, description})

    response.status(201).send();

})

specificationsRoutes.get('/', (request: Request, response: Response)=> {
    
    const all = repo.list();

    response.json(all);

})

export { specificationsRoutes }