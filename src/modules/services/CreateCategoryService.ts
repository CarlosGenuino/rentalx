import { CategoriesRepository } from "../repositories/CategoriesRepository"
import { IRequest } from "../repositories/ICategoriesRepository";

class CreateCategoryService {
    
    constructor(private repo: CategoriesRepository){
    }

    execute({name, description}: IRequest): void {
        const alreadyExistsCategory = this.repo.findByName(name);
    
        if(alreadyExistsCategory){
            throw new Error("Category Already Exists");
        }
        
        this.repo.create({name, description});
    }
}

export {CreateCategoryService}