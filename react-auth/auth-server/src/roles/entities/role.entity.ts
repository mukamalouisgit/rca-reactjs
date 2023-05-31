import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    role_id: string;
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true,
        default: 'Normal'
    }) role_name: string;

    @Column({
        type: 'boolean',
        default: false
    })
    is_active?: boolean;
}