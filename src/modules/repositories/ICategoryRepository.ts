import { Category } from "../model/Category";

interface IRequest {
    name: string,
    description: string
}



interface ICategoryRepository {
    findByName(name : string): Category;
    list(): Category[];
    create({name, description} : IRequest):void
}

export {ICategoryRepository, IRequest}