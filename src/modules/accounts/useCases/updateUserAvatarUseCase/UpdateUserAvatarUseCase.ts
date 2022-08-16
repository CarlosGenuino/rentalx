import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { UserRepository } from "../../repositories/implementations/UserRepository";

interface IRequest {
    user_id: string;
    avatar_file: string;
}


@injectable()
class UpdateUserAvatarUseCase{
    constructor(
        @inject("UserRepository")
        private repo: UserRepository
    ){}
    
    
    async excute({user_id, avatar_file}:IRequest): Promise<void> {
        const user = await this.repo.findById(user_id);
        if(user.avatar){
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }
        user.avatar = avatar_file;
        await this.repo.create(user);    
    }
}

export { UpdateUserAvatarUseCase }