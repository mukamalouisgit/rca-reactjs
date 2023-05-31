import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsEmail, IsBoolean } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto  {
    @IsNotEmpty() id: string;
    @IsNotEmpty() names: string;
    @IsNotEmpty() @IsEmail() email: string;
    @IsNotEmpty()  password: string;
    @IsNotEmpty()  current_password: string;
    @IsNotEmpty()  profile_photo: string;
    @IsNotEmpty()  role: any;
    @IsNotEmpty()  password_reset_token: string;
    @IsNotEmpty()  is_registration_confirmed: boolean;
    @IsNotEmpty()  is_active: boolean
}
