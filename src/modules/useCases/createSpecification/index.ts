import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const repository = SpecificationRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(repository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);


export { createSpecificationController }