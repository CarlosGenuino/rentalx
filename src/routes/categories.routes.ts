import {Router, Request, Response} from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../modules/useCases/createCategory/CreateCategoryController';


import { ImportCategoryController } from '../modules/useCases/importCategory/ImportCategoryController';
import { ListCategoryController } from '../modules/useCases/listCategory/ListCategoryController';

const categoriesRoutes = Router()
const upload = multer({
    dest: './tmp'
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoryController.handle); 

categoriesRoutes.post('/import', upload.single("file"),  importCategoryController.handle)

export {categoriesRoutes};