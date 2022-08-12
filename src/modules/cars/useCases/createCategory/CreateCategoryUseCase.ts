import { inject, injectable } from "tsyringe"
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { IRequest } from "../../repositories/ICategoryRepository";
import { ApiError } from "../../../../errors/ApiError";

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
            throw new ApiError("Category Already Exists");
        }
        
        this.repo.create({name, description});
    }
}

export {CreateCategoryUseCase}