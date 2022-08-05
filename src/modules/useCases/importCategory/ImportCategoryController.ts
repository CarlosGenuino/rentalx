import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
   
    handle(req: Request, resp: Response):Response {
        const { file } = req
        const useCase = container.resolve(ImportCategoryUseCase);
        useCase.execute(file);
        return resp.send();
    }
}

export {ImportCategoryController}