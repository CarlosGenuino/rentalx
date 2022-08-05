import {Router, Request, Response} from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../modules/useCases/createCategory/CreateCategoryController';


import { importCategoryController } from '../modules/useCases/importCategory';
import { listCategoryController } from '../modules/useCases/listCategory/index';

const categoriesRoutes = Router()
const upload = multer({
    dest: './tmp'
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request: Request, response: Response) => {
    return listCategoryController.handle(request, response);
}); 

categoriesRoutes.post('/import', upload.single("file"),  (req, resp) => {
    return importCategoryController.handle(req, resp);
} )

export {categoriesRoutes};