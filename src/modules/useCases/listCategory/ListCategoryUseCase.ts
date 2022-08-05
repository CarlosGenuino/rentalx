import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private repository: ICategoryRepository){

    }
    
    async execute(): Promise<Category[]> {
        return await this.repository.list()
    }
}

export { ListCategoryUseCase }