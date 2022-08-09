import { CreateUserDTO } from "../dto/CreateUserDTO"

interface IUserRepository {
    create(data: CreateUserDTO): Promise<void>
}

export { IUserRepository }