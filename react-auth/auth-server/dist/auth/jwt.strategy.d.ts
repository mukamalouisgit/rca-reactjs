import { Strategy } from 'passport-jwt';
import { JwtPayload } from 'src/interfaces/payload.interface';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: JwtPayload): Promise<UserDto>;
}
export {};
