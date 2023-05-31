"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./entities/role.entity");
let RolesService = class RolesService {
    constructor(roleRepo) {
        this.roleRepo = roleRepo;
    }
    async create(createRoleDto) {
        const obj = await this.roleRepo.findOne({ where: { role_name: createRoleDto.role_name } });
        if (obj) {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Role exists` };
        }
        else {
            this.roleRepo.save(createRoleDto);
            return { statusCode: common_1.HttpStatus.OK, message: `Created successfully` };
        }
    }
    findAll() {
        return this.roleRepo.find();
    }
    async findOne(role_id) {
        const role = this.roleRepo.findOne({ where: { role_id: role_id } });
        if (role) {
            return role;
        }
        else {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Role not found` };
        }
    }
    async update(updateRoleDto) {
        if (await this.findOne(updateRoleDto.role_id)) {
            this.roleRepo.update(updateRoleDto.role_id, updateRoleDto);
            return { statusCode: common_1.HttpStatus.OK, message: `Updated successfully` };
        }
        else {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Role not found` };
        }
    }
    async remove(role_id) {
        if (await this.findOne(role_id)) {
            await this.roleRepo.delete(role_id);
            return { statusCode: common_1.HttpStatus.OK, message: `Role has been deleted` };
        }
        else {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Role not found` };
        }
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map