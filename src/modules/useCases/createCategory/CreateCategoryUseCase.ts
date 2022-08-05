import { inject, injectable } from "tsyringe"
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { IRequest } from "../../repositories/ICategoryRepository";

@injectable()
class CreateCategoryUseCase {
    
    constructor(
        @inject("CategoryRepository")
        private repo: CategoryRepository
        
    ){
    }

    async execute({name, description}: IRequest): Promise<void> {
        const alreadyExistsCategory =  await this.repo.findByName(name);
    
        if(alreadyExistsCategory){
            throw new Error("Category Already Exists");
        }
        
        this.repo.create({name, description});
    }
}

export {CreateCategoryUseCase}