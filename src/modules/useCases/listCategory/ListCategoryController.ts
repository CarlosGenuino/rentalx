import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
    
    constructor(private listCategoryUseCase: ListCategoryUseCase){

    }
    handle(request: Request, response: Response ): Response {
        return response.status(200).json(this.listCategoryUseCase.execute())  
    }
}

export { ListCategoryController }