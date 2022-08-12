import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {name,email, driver_license, password} = request.body;
        const useCase = container.resolve(CreateUserUseCase);
        console.log("passou aqui");
        return useCase.execute({name,email, driver_license, password})
        .then(()=> response.status(201).send())
        .catch((error)=> response.status(400).json({message: error.message }))
    }
}

export { CreateUserController }