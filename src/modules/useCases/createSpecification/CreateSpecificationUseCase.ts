
import { IRequest } from "../../repositories/ICategoryRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class CreateSpecificationUseCase {
    constructor(private repo: ISpecificationRepository){
    }

    execute({name, description}: IRequest){
        this.repo.create({name, description});
    }
}

export { CreateSpecificationUseCase }