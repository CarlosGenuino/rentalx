import { container } from 'tsyringe';
import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController{
    
  

    async handle(request: Request, response : Response){
        const {name, description}  = request.body
        const useCase = container.resolve(CreateSpecificationUseCase);
        await useCase.execute({name, description});
        return response.status(201).send()
    }
}

export {CreateSpecificationController}