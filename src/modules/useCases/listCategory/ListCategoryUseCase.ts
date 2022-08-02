import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoryUseCase {
    constructor(private repository: ICategoryRepository){

    }
    
    execute(): Category[] {
        return this.repository.list()
    }
}

export { ListCategoryUseCase }