import { container } from "tsyringe"

import { ICategoryRepository } from "../../modules/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/repositories/implementations/CategoryRepository";
import { SpecificationRepository } from "../../modules/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository", CategoryRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository", SpecificationRepository
)
