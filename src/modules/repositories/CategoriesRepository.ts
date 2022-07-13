import { Category } from "../model/Category"
import { ICategoriesRepository } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];
    constructor(){
        this.categories = []
    }

    findByName(name: String): Category {
        return this.categories.find( c => c.name == name);
    }

    create({name, description}: Category): Category {
        const category: Category = new Category();
        Object.assign(category, {name, description})
        this.categories.push(category)
        return category;
    }

    list(): Array<Category> {
        return this.categories;
    }
}

export {CategoriesRepository}