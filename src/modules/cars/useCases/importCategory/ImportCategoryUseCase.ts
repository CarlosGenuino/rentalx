import fs from 'fs'
import {parse} from 'csv-parse'
import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';
import { inject, injectable } from 'tsyringe';

interface ICategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: CategoryRepository) {
        
    }

    async execute(file: Express.Multer.File): Promise<void> {
        this.loadCategories(file).then(
            categories => {
                categories.map(async category => {
                    const {name, description} = category
                    const existCategory = await this.categoryRepository.findByName(name)
                    if (!existCategory){
                        this.categoryRepository.create({name, description})
                    }
                })
            }
        );
    }

    
    loadCategories(file: Express.Multer.File): Promise<ICategory[]> {
        return new Promise((resolver, reject) => {
            const stream = fs.createReadStream(file.path)
            const categoriesToImport: Array<ICategory> = [];
            const parseFile = parse({
                delimiter:  ','
            });
            stream.pipe(parseFile)

            parseFile.on("data", async (line) => {
                const [name, description] = line;
                categoriesToImport.push({name, description})
            })
            .on('end', ()=> {
                fs.promises.unlink(file.path)
                resolver(categoriesToImport) 
            })
            .on('error', (err)=> {
                reject(err)
            });
        })
    }
}

export { ImportCategoryUseCase }