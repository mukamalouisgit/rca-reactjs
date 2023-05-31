import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  names: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  profile_photo:string;

  @IsNotEmpty()
  role?: {
    role_id?: string;
    role_name?: string;
  }

  @IsNotEmpty()
  is_active: boolean;
}
