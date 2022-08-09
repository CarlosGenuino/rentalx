import { Repository } from 'typeorm';
import AppDataSource from '../../../../database';
import { CreateUserDTO } from '../../dto/CreateUserDTO';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository'
 


class UserRepository implements IUserRepository{
    private repository: Repository<User>;

    constructor(){
        this.repository = AppDataSource.getRepository(User); 
    }


    async create({name, username, email, driver_license, password}: CreateUserDTO): Promise<void> {

        const user = this.repository.create({
            name,
            email,
            username,
            password,
            driver_license
        })    
        
        await this.repository.save(user);
    }

}

export { UserRepository } 