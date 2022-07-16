import { categoriesRepository } from "../createCategory";
import { ListCategoryController } from "./ListCategoryController"
import { ListCategoryUseCase } from "./ListCategoryUseCase"


const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryUseCase, listCategoryController}