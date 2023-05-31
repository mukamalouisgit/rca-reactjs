import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty() id: string;
    @IsNotEmpty() names: string;
    @IsNotEmpty() @IsEmail() email: string;
    @IsNotEmpty() password: string;
    @IsNotEmpty() profile_photo: string;
    @IsNotEmpty() role: any;
    @IsNotEmpty() registration_token: string;
}