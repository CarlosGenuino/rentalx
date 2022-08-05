import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    
    async handle(request: Request, response: Response): Promise<Response>{
        const {name, description } = request.body;
        const useCase = container.resolve(CreateCategoryUseCase);
        return useCase.execute({name, description})
        .then(()=> response.status(201).send())
        .catch((error)=> response.status(400).json({message: error.message }))
    }

}

export { CreateCategoryController }