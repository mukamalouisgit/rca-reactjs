import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
export declare class RolesService {
    private readonly roleRepo;
    constructor(roleRepo: Repository<Role>);
    create(createRoleDto: CreateRoleDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(): Promise<Role[]>;
    findOne(role_id: string): Promise<Role | {
        statusCode: HttpStatus;
        message: string;
    }>;
    update(updateRoleDto: UpdateRoleDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(role_id: any): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
