import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    FirstName: string

    @Column()
    LastName: string

    @Column()
    IsActive: boolean

    @CreateDateColumn()
    CreatedDate: Date

    @UpdateDateColumn()
    UpdatedDate: Date
}