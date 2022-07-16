import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoryUseCase {
    constructor(private repository: ICategoryRepository){

    }
    
    execute(): Category[] {
        return this.repository.list()
    }
}

export { ListCategoryUseCase }