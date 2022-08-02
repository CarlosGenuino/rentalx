import e from "express";
import { Repository } from "typeorm"
import AppDataSource from "../../../database";

import { Category } from "../../entities/Category"
import { ICategoryRepository } from "../ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    
    private repository: Repository<Category>;
    
    constructor(){
       
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOneBy({name})
        return category;
    }

    async create({name, description}: Category): Promise<void> {

        const entity = this.repository.create({description, name})
        await this.repository.save(entity);
    
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find()
        return categories;
    }
}

export { CategoryRepository }