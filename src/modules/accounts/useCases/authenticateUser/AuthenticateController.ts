import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

class AuthenticateController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {email, password} = request.body;
        const useCase = container.resolve(AuthenticateUseCase);
        const token = await useCase.execute({email, password})
        return response.json(token);
    }
}

export { AuthenticateController }