import {Router, Request, Response} from 'express';
import multer from 'multer';


import  createCategoryController from '../modules/useCases/createCategory';
import { importCategoryController } from '../modules/useCases/importCategory';
import { listCategoryController } from '../modules/useCases/listCategory/index';

const categoriesRoutes = Router()
const upload = multer({
    dest: './tmp'
});

categoriesRoutes.post('/', (request: Request, response: Response) => {
    return createCategoryController().handle(request, response)    
})

categoriesRoutes.get('/', (request: Request, response: Response) => {
    return listCategoryController.handle(request, response);
}); 

categoriesRoutes.post('/import', upload.single("file"),  (req, resp) => {
    return importCategoryController.handle(req, resp);
} )

export {categoriesRoutes};