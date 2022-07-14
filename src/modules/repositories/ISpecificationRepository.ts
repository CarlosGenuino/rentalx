import { Specification } from "../model/Specification";
import { IRequest } from "./ICategoriesRepository";

interface ISpecificationRepository {
    create({name, description}: IRequest): Specification

    findByName(name: string): Specification

    delete(entity: Specification): void

    deleteById(uuid: string): void
}

export { ISpecificationRepository }