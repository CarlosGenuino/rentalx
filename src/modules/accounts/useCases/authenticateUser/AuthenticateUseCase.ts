import { inject, injectable } from "tsyringe";
import { compare, hash } from "bcrypt";

import { CreateUserDTO } from "../../dto/CreateUserDTO";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ApiError } from "../../../../errors/ApiError";
import { sign } from "jsonwebtoken";
import { Response } from "express";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateUseCase {
    constructor(
        @inject("UserRepository")
        private repo: UserRepository
    )
    {}
    
    async execute({email, password}: IRequest): Promise<IResponse>{
        const user = await this.repo.findByEmail(email);
        const message = "email or password incorrect"
        
        if(!user){
            throw new ApiError(message);
        }

        const passwordMatch = compare(password, user.password);

        if(!passwordMatch){
            throw new ApiError(message);
        }

        const token = sign({}, "f27bbca8396ec3bda41f0f3d84fdcc3b", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenRetorn: IResponse = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        }

        return tokenRetorn;
        

        
    }
}

export { AuthenticateUseCase }