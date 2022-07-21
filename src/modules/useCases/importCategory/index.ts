import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";


const repository = CategoryRepository.getInstance();
const importCategoryuseCase = new ImportCategoryUseCase(repository);
const importCategoryController = new ImportCategoryController(importCategoryuseCase);


export { importCategoryController }