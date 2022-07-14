import { Specification } from "../model/Specification";
import { IRequest } from "./ICategoriesRepository";
import { ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications = [];
    
    create({ name, description }: IRequest): Specification {
        const specification = new Specification();
        
        Object.assign(specification, {
            name,
            description
        })

        this.specifications.push(specification);
        return specification;
    }
    findByName(name: string): Specification {
        return this.specifications.find(s => s.name == name);
    }
    delete(entity: Specification): void {
        
    }
    deleteById(uuid: string): void {
        
    }

    list(): Specification[]{
        return this.specifications;
    }

}

export { SpecificationRepository }