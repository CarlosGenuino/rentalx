import { Repository } from 'typeorm';
import AppDataSource from "../../../database";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;
    
    constructor(){
        this.repository = AppDataSource.getRepository(Specification);
    }
    
    async findByName(name: string): Promise<Specification> {
        const category = await this.repository.findOneBy({name: name})
        return category;
    }

    async create({name, description}: Specification): Promise<void> {

        const entity = this.repository.create({description, name})
        await this.repository.save(entity);
    
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find()
        return specifications;
    }

}

export { SpecificationRepository }