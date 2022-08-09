import { Specification } from "../entities/Specification";
import { IRequest } from "./ICategoryRepository";

interface ISpecificationRepository {
    create({name, description}: IRequest): Promise<void>
    list(): Promise<Specification[]>
    findByName(name: string): Promise<Specification>
}

export { ISpecificationRepository }