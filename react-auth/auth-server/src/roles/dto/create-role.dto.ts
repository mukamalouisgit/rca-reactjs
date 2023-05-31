import { IsNotEmpty } from "class-validator";

export class CreateRoleDto {
    @IsNotEmpty() role_id: string;
    @IsNotEmpty() role_name: string;
}
