import { Specification } from "../entities/Specification";
import { IRequest } from "./ICategoryRepository";

interface ISpecificationRepository {
    create({name, description}: IRequest): Specification

    findByName(name: string): Specification

    delete(entity: Specification): void

    deleteById(uuid: string): void
}

export { ISpecificationRepository }