import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"
import { v4 as uuidV4 } from 'uuid'

@Entity("categories")
class Category {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @CreateDateColumn()
    created_at?: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
            this.created_at = new Date()
        }
    }
}

export { Category }