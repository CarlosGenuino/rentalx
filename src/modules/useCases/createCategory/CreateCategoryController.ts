import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryService: CreateCategoryUseCase){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        const {name, description } = request.body;
        
        return this.createCategoryService.execute({name, description})
        .then(()=> response.status(201).send())
        .catch((error)=> response.status(400).json({message: error.message }))
    }

}

export { CreateCategoryController }