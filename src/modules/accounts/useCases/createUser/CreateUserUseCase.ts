import { inject, injectable } from "tsyringe";
import { CreateUserDTO } from "../../dto/CreateUserDTO";
import { UserRepository } from "../../repositories/implementations/UserRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private repo: UserRepository
    )
    {}
    
    async execute({name,email, username, driver_license, password}: CreateUserDTO): Promise<void>{
        this.repo.create({name, email, username, driver_license, password});
    }
}

export { CreateUserUseCase }