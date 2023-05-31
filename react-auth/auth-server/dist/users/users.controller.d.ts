import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/user-login.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<any>;
    login(loginUserDto: LoginUserDto): Promise<import("../interfaces/login-status.interface").LoginStatus>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): Promise<import("./dto/user.dto").UserDto | {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    forget_password(updateUserDto: UpdateUserDto): Promise<any>;
    update(updateUserDto: UpdateUserDto, file: any): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    change_password(updateUserDto: UpdateUserDto, file: any): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    confirm_registration(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(id: string): Promise<any>;
    seeUploadedFile(image: any, res: any): any;
}
