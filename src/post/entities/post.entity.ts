import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class  Post{
    @PrimaryGeneratedColumn()
    id:number;


    @Column({type: 'varchar', length:150})
    slug:string;

    @Column({type: 'varchar', length:150})
    excerpt:string;

    @Column({type: 'varchar', length:250})
    content:string;

    @Column({type: 'varchar', length:150})
    category:string;

    @Column({type: 'varchar', length:150})
    tags:string[];

    @Column({type: 'varchar', length:20})
    status:boolean;

    
    @CreateDateColumn({type:'timestamp'})
    createdAt:Date;
}