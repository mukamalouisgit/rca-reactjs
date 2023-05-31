import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(): Promise<import("./entities/role.entity").Role[]>;
    findOne(role_id: string): Promise<import("./entities/role.entity").Role | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    update(updateRoleDto: UpdateRoleDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(role_id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
