import { Category } from "../entities/Category";

interface IRequest {
    name: string,
    description: string
}



interface ICategoryRepository {
    findByName(name : string): Promise<Category>;
    list(): Promise<Category[]>;
    create({name, description} : IRequest): Promise<void>
}

export {ICategoryRepository, IRequest}