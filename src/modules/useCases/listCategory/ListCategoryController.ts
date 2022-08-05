import { container } from 'tsyringe';
import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
    
    
    handle(request: Request, response: Response ): Response {
        const useCase = container.resolve(ListCategoryUseCase);
        return response.status(200).json(useCase.execute())  
    }
}

export { ListCategoryController }