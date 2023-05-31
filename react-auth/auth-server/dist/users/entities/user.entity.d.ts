import { Role } from "src/roles/entities/role.entity";
export declare class User {
    id: string;
    names: string;
    email: string;
    password: string;
    profile_photo: string;
    role: Role;
    is_active?: boolean;
    is_registration_confirmed?: boolean;
    password_reset_token: string;
    hashPassword(): Promise<void>;
}
