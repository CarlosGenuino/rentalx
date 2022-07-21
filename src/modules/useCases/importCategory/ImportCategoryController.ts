import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor(private useCase: ImportCategoryUseCase){

    }

    handle(req: Request, resp: Response):Response {
        const { file } = req
        this.useCase.execute(file);
        return resp.send();
    }
}

export {ImportCategoryController}