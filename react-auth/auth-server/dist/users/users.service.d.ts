import { HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginStatus } from 'src/interfaces/login-status.interface';
import { JwtPayload } from 'src/interfaces/payload.interface';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { MailService } from 'src/mail/mail.service';
export declare class UsersService {
    private readonly userRepo;
    private readonly jwtService;
    private mailService;
    constructor(userRepo: Repository<User>, jwtService: JwtService, mailService: MailService);
    sign_up(userDto: CreateUserDto): Promise<any>;
    login(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    findByLogin(loginUserDto: LoginUserDto): Promise<UserDto>;
    private _createToken;
    validateUser(payload: JwtPayload): Promise<UserDto>;
    findByPayload(email: any): Promise<any>;
    forget_password(updateUserDto: UpdateUserDto): Promise<any>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<UserDto | {
        statusCode: HttpStatus;
        message: string;
    }>;
    change_password(updateUserDto: UpdateUserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    confirm_registration(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    update(updateUserDto: UpdateUserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
