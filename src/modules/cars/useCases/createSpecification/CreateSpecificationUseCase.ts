
import { inject, injectable } from "tsyringe";
import { IRequest } from "../../repositories/ICategoryRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private repo: ISpecificationRepository){
    }

    async execute({name, description}: IRequest){
        this.repo.create({name, description});
    }
}

export { CreateSpecificationUseCase }