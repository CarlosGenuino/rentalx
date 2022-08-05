import { container } from 'tsyringe';
import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
    
    
    async handle(request: Request, response: Response ): Promise<Response> {
        const useCase = container.resolve(ListCategoryUseCase);
        return useCase.execute().then(list => response.json(list).send())
    }
}

export { ListCategoryController }