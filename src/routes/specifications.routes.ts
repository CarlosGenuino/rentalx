import {Router, Request, Response} from 'express';
import { createSpecificationController } from '../modules/useCases/createSpecification';


const specificationsRoutes = Router()

specificationsRoutes.post('/', (request: Request, response: Response)=> {
    return createSpecificationController.handle(request, response);
})

// specificationsRoutes.get('/', (request: Request, response: Response)=> {
    
//     const all = repo.list();

//     response.json(all);

// })

export { specificationsRoutes }