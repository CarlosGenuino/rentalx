
import { inject, injectable } from "tsyringe";
import { ApiError } from "../../../../errors/ApiError";
import { IRequest } from "../../repositories/ICategoryRepository";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private repo: ISpecificationRepository){
    }

    async execute({name, description}: IRequest){
        const spec = await this.repo.findByName(name);
        if(spec){
            throw new ApiError("specification already exists")
        }
        this.repo.create({name, description});
    }
}

export { CreateSpecificationUseCase }