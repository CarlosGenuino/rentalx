import {Router, Request, Response} from 'express';
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
const categoriesRoutes = Router()

const categoriesRepository: CategoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
    const {name, description } = request.body;
    categoriesRepository.create({name, description});
    return response.status(201).send();
})

export {categoriesRoutes};