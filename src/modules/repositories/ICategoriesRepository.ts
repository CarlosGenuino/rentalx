import { Category } from "../model/Category";

interface IRequest {
    name: string,
    description: string
}



interface ICategoriesRepository {
    findByName(name : string): Category;
    list(): Category[];
    create({name, description} : IRequest):void
}

export {ICategoriesRepository, IRequest}