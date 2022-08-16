import { container } from 'tsyringe';
import { Request, Response } from "express";
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController{
    async handle(request: Request, response:Response): Promise<Response>{
        const avatar_file = request.file.filename;
        const { id } = request.user;
        const useCase = container.resolve(UpdateUserAvatarUseCase);
        useCase.excute({user_id: id, avatar_file: avatar_file})
        return response.status(204).send()
    }
}

export {UpdateUserAvatarController}