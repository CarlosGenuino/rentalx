import {Router, Request, Response} from 'express';
import { CategoriesRepository } from '../modules/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/services/CreateCategoryService';
const categoriesRoutes = Router()

const categoriesRepository: CategoriesRepository = new CategoriesRepository();
const createCategoryService: CreateCategoryService = new CreateCategoryService(categoriesRepository);

categoriesRoutes.post('/', (request: Request, response: Response) => {
    const {name, description } = request.body;
    createCategoryService.execute({name, description})
    return response.status(201).send();
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
    const resp = categoriesRepository.list();
    response.json(resp);
}); 

export {categoriesRoutes};