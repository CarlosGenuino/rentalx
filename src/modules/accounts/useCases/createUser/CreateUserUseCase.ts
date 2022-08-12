import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { CreateUserDTO } from "../../dto/CreateUserDTO";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ApiError } from "../../../../errors/ApiError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private repo: UserRepository
    )
    {}
    
    async execute({name,email, driver_license, password}: CreateUserDTO): Promise<void>{
        const user = await this.repo.findByEmail(email);
        
        if(user){
            throw new ApiError("user already exists");
        }

        const passwordHash = await hash(password, 8);
        await this.repo.create({name, email, driver_license, password: passwordHash});
    }
}

export { CreateUserUseCase }