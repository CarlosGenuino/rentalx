import {Router, Request, Response} from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';


const specificationsRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post('/', createSpecificationController.handle)

// specificationsRoutes.get('/', (request: Request, response: Response)=> {
    
//     const all = repo.list();

//     response.json(all);

// })

export { specificationsRoutes }