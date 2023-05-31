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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const mapper_1 = require("../utils/mapper");
const my_constants_1 = require("../utils/my_constants");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const mail_service_1 = require("../mail/mail.service");
const uuidv4_1 = require("uuidv4");
let UsersService = class UsersService {
    constructor(userRepo, jwtService, mailService) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async sign_up(userDto) {
        if (await this.findByPayload(userDto.email)) {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `User with ${userDto.email} exists` };
        }
        else {
            const { names, password, email, role } = userDto;
            const user = this.userRepo.create({ names, password, email, role });
            ;
            await this.mailService.sendRegistrationConfirmation(await (await this.userRepo.insert(user)).generatedMaps[0].id, email, names);
            return { statusCode: common_1.HttpStatus.OK, message: `User ${userDto.names} is registered` };
        }
    }
    async login(loginUserDto) {
        const user = await this.findByLogin(loginUserDto);
        const token = this._createToken(user);
        return Object.assign({ user }, token);
    }
    async findByLogin(loginUserDto) {
        const user = await this.userRepo.createQueryBuilder("users")
            .innerJoinAndSelect("users.role", "roles")
            .where("users.email = :email", { email: loginUserDto.email })
            .andWhere("users.is_registration_confirmed = :is_registration_confirmed", { is_registration_confirmed: true })
            .andWhere("users.is_active = :is_active", { is_active: true })
            .andWhere("roles.is_active = :is_active", { is_active: true })
            .getOne();
        if (!user) {
            throw new common_1.HttpException('User not activated', common_1.HttpStatus.UNAUTHORIZED);
        }
        const areEqual = await (0, mapper_1.comparePasswords)(user.password, loginUserDto.password);
        if (!areEqual) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        return (0, mapper_1.toUserDto)(user);
    }
    _createToken({ email }) {
        const expiresIn = my_constants_1.jwtConstants.EXPIRESIN;
        const user = { email };
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn,
            accessToken,
        };
    }
    async validateUser(payload) {
        const user = await this.findByPayload(payload.email);
        if (!user) {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
    async findByPayload(email) {
        return await this.userRepo.findOne({ where: { email } });
    }
    async forget_password(updateUserDto) {
        const user = await this.userRepo.findOne({ where: { email: updateUserDto.email } });
        if (user) {
            await this.mailService.sendForgetPassword(user);
            return { statusCode: common_1.HttpStatus.OK, message: `Reset password link is sent` };
        }
        else {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Invalid email` };
        }
    }
    findAll() {
        return this.userRepo.find({
            relations: {
                role: true
            },
        });
    }
    async findOne(id) {
        if (await (0, mapper_1.isExists)(id, this.userRepo)) {
            const user = this.userRepo.createQueryBuilder("users")
                .innerJoinAndSelect("users.role", "roles")
                .where("users.id = :id", { id: id })
                .getOne();
            return (0, mapper_1.toUserDto)(await user);
        }
        else {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `User not found` };
        }
    }
    async change_password(updateUserDto) {
        const current_user = await this.userRepo.findOne({ where: { password_reset_token: updateUserDto.password_reset_token } });
        if (current_user) {
            if (current_user.password_reset_token === updateUserDto.password_reset_token) {
                updateUserDto.password_reset_token = (0, uuidv4_1.uuid)();
                const { password_reset_token, password } = updateUserDto;
                const user = this.userRepo.create({ password_reset_token, password });
                this.userRepo.update(current_user.id, user);
                return { statusCode: common_1.HttpStatus.OK, message: `Password updated successfully` };
            }
            else {
                return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Password reset token not matching` };
            }
        }
        else {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Invalid link` };
        }
    }
    async confirm_registration(id) {
        const current_user = await this.userRepo.findOne({ where: { id: id } });
        if (current_user) {
            if (!current_user.is_registration_confirmed) {
                current_user.is_registration_confirmed = true;
                this.userRepo.update(current_user.id, current_user);
                return { statusCode: common_1.HttpStatus.OK, message: `Confirmed successfully` };
            }
            else {
                return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Invalid link` };
            }
        }
        else {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Invalid link` };
        }
    }
    async update(updateUserDto) {
        const existingUser = await this.userRepo.findOne({ where: { id: updateUserDto.id } });
        if (existingUser) {
            switch (true) {
                case updateUserDto.profile_photo !== undefined:
                    existingUser.profile_photo = updateUserDto.profile_photo;
                    console.log(existingUser, updateUserDto, 'with profile photo');
                    this.userRepo.update(existingUser.id, existingUser);
                    return { statusCode: common_1.HttpStatus.OK, message: `Updated successfully` };
                case updateUserDto.password !== undefined:
                    console.log(updateUserDto, 'with pass');
                    const areEqual = await bcrypt.compare(updateUserDto.current_password, existingUser.password);
                    if (!areEqual) {
                        return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Current password is not correct` };
                    }
                    else {
                        const { id, password } = updateUserDto;
                        if (!await bcrypt.compare(password, existingUser.password)) {
                            const user = this.userRepo.create({ id, password });
                            this.userRepo.update(user.id, user);
                            return { statusCode: common_1.HttpStatus.OK, message: `Password updated successfully` };
                        }
                        else {
                            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `Please choose different password` };
                        }
                    }
                default:
                    existingUser.names = updateUserDto.names;
                    existingUser.email = updateUserDto.email;
                    existingUser.role = updateUserDto.role;
                    console.log(existingUser, updateUserDto, 'with details');
                    this.userRepo.update(existingUser.id, existingUser);
                    return { statusCode: common_1.HttpStatus.OK, message: `Updated successfully` };
            }
        }
        else {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `User not found` };
        }
    }
    async remove(id) {
        if (await (0, mapper_1.isExists)(id, this.userRepo)) {
            await this.userRepo.delete(id);
            return { statusCode: common_1.HttpStatus.OK, message: `Deleted successfully` };
        }
        else {
            return { statusCode: common_1.HttpStatus.UNAUTHORIZED, message: `User not found` };
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        mail_service_1.MailService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map