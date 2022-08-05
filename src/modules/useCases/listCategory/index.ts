import { ListCategoryController } from "./ListCategoryController"
import { ListCategoryUseCase } from "./ListCategoryUseCase"

const categoriesRepository = null;
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryUseCase, listCategoryController}