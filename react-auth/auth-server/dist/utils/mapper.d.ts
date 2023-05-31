import { UserDto } from "src/users/dto/user.dto";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
export declare const toUserDto: (data: User) => UserDto;
export declare const comparePasswords: (userPassword: string, currentPassword: string) => Promise<boolean>;
export declare const toPromise: <T>(data: T) => Promise<T>;
export declare function isExists(id: string, repo: Repository<any>): Promise<boolean>;
