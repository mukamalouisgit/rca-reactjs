import { UserDto } from "src/users/dto/user.dto";
import { User } from "src/users/entities/user.entity";
import * as bcrypt from 'bcrypt';
import { Repository } from "typeorm";
import { Role } from "src/roles/entities/role.entity";





export const toUserDto = (data: User): UserDto => {
  const { id, names, email, is_active, profile_photo, role: { role_id, role_name } } = data;
  let userDto: UserDto = {
    id,
    names,
    email,
    is_active,
    profile_photo,
    role: { role_id, role_name },
  };

  return userDto;
};

export const comparePasswords = async (userPassword: string, currentPassword: string) => {
  return await bcrypt.compare(currentPassword, userPassword);
};


export const toPromise = <T>(data: T): Promise<T> => {
  return new Promise<T>(resolve => { resolve(data); });
};




export async function isExists(id: string, repo: Repository<any>) {
  try {
    const obj = await repo.findOne({ where: { id: id } });
    if (obj) {
      return true
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

