import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
   
    async handle(req: Request, resp: Response):Promise<Response> {
        const { file } = req
        const useCase = container.resolve(ImportCategoryUseCase);
        await useCase.execute(file);
        return resp.send();
    }
}

export {ImportCategoryController}