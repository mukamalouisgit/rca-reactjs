import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly roleRepo: Repository<Role>

  ) { }

  async create(createRoleDto: CreateRoleDto) {
    const obj = await this.roleRepo.findOne({ where: { role_name: createRoleDto.role_name } });
    if (obj) {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `Role exists` };
    } else {
      this.roleRepo.save(createRoleDto);
      return { statusCode: HttpStatus.OK, message: `Created successfully` };
    }
  }

  findAll() :Promise<Role[]>{
    return this.roleRepo.find()
  }

  async findOne(role_id: string) {
    const role= this.roleRepo.findOne({where:{role_id:role_id}});
    if (role) {
      return role;
    } else {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `Role not found` };
    }
  }

  

  async update(updateRoleDto: UpdateRoleDto) {
    if (await this.findOne(updateRoleDto.role_id)) {
      this.roleRepo.update(updateRoleDto.role_id, updateRoleDto);
      return { statusCode: HttpStatus.OK, message: `Updated successfully` };

    } else {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `Role not found` };
    }
  }

  async remove(role_id: any) {
    if (await this.findOne(role_id)) {
      await this.roleRepo.delete(role_id);
      return { statusCode: HttpStatus.OK, message: `Role has been deleted` };
    } else {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `Role not found` };
    }
  }
}
