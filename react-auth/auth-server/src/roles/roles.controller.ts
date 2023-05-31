import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post('create')
  // @UseGuards(AuthGuard('jwt'))
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':role_id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('role_id') role_id: string) {
    return this.rolesService.findOne(role_id);
  }

  @Put('update')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(updateRoleDto);
  }

  @Delete('delete/:role_id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('role_id') role_id: string) {
    return this.rolesService.remove(role_id);
  }
}
