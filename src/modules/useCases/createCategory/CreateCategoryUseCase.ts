import { CategoryRepository } from "../../repositories/CategoryRepository";
import { IRequest } from "../../repositories/ICategoryRepository";


class CreateCategoryUseCase {
    
    constructor(private repo: CategoryRepository){
    }

    execute({name, description}: IRequest): void {
        const alreadyExistsCategory = this.repo.findByName(name);
    
        if(alreadyExistsCategory){
            throw new Error("Category Already Exists");
        }
        
        this.repo.create({name, description});
    }
}

export {CreateCategoryUseCase}