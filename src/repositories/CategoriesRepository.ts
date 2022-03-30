import { Category } from "../model/Category"

class CategoriesRepository {
    private categories: Category[];
    constructor(){
        this.categories = []
    }

    create({name, description}: Category): Category {
        const category: Category = new Category();
        Object.assign(category, {name, description})
        this.categories.push(category)
        return category;
    }
}

export {CategoriesRepository}