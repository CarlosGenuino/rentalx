import {Router, Request, Response} from 'express';
import { createCategoryController } from '../modules/useCases/createCategory';
import { listCategoryController } from '../modules/useCases/listCategory/index';

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request: Request, response: Response) => {
    return createCategoryController.handle(request, response)    
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
    return listCategoryController.handle(request, response);
}); 

export {categoriesRoutes};