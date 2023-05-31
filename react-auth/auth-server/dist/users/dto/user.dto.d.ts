export declare class UserDto {
    id: string;
    names: string;
    email: string;
    profile_photo: string;
    role?: {
        role_id?: string;
        role_name?: string;
    };
    is_active: boolean;
}
