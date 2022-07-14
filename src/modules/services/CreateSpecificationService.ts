import { IRequest } from "../repositories/ICategoriesRepository";
import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

class CreateSpecificationService {
    constructor(private repo: ISpecificationRepository){
    }

    execute({name, description}: IRequest){
        this.repo.create({name, description});
    }
}

export { CreateSpecificationService }