import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinColumn, OneToOne, ManyToOne, BeforeUpdate } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Role } from "src/roles/entities/role.entity";
import { uuid } from "uuidv4";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid') id: string;

    @Column({
        type: 'varchar',
        nullable: false,
    }
    ) names: string;

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    }) email: string;

    @Column({
        type: 'varchar',
        nullable: false,
    }) password: string;

    @Column({
        type: 'varchar',
        nullable: true,
    }) profile_photo: string;

    @ManyToOne(() => Role)
    @JoinColumn({name: "role_id"})
    role: Role;

    @Column({
        type: 'boolean',
        default: false
    })
    is_active?: boolean;

    @Column({
        type: 'boolean',
        default: false
    })
    is_registration_confirmed?: boolean;

    @Column({
        type: 'varchar',
        default: uuid()
    })
    password_reset_token: string;

    @BeforeUpdate()
    @BeforeInsert() async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

}