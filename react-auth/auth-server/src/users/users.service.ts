/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginStatus } from 'src/interfaces/login-status.interface';
import { JwtPayload } from 'src/interfaces/payload.interface';
import { comparePasswords, isExists, toUserDto } from 'src/utils/mapper';
import { jwtConstants } from 'src/utils/my_constants';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { MailService } from 'src/mail/mail.service';
import { uuid } from 'uuidv4';

@Injectable()
export class UsersService {


  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
    private mailService: MailService
  ) { }


  async sign_up(userDto: CreateUserDto): Promise<any> {

    if (await this.findByPayload(userDto.email)) {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `User with ${userDto.email} exists` };
    } else {
      const { names, password, email, role } = userDto;
      const user: User = this.userRepo.create({ names, password, email, role });
      ;
      await this.mailService.sendRegistrationConfirmation(await (await this.userRepo.insert(user)).generatedMaps[0].id, email, names);
      return { statusCode: HttpStatus.OK, message: `User ${userDto.names} is registered` };
    }
  }



  async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    // find user in db
    const user = await this.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);

    return { user, ...token };
  }

  async findByLogin(loginUserDto: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.createQueryBuilder("users")
      .innerJoinAndSelect(
        "users.role",
        "roles",
      )
      .where("users.email = :email", { email: loginUserDto.email })
      .andWhere("users.is_registration_confirmed = :is_registration_confirmed", { is_registration_confirmed: true })
      .andWhere("users.is_active = :is_active", { is_active: true })
      .andWhere("roles.is_active = :is_active", { is_active: true })
      .getOne()

    if (!user) {
      throw new HttpException('User not activated', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await comparePasswords(user.password, loginUserDto.password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }



  private _createToken({ email }: UserDto): any {
    const expiresIn = jwtConstants.EXPIRESIN;


    const user: JwtPayload = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }


  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.findByPayload(payload.email);

    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async findByPayload(email: any): Promise<any> {
    return await this.userRepo.findOne({ where: { email } });
  }

  async forget_password(updateUserDto: UpdateUserDto): Promise<any> {

    const user = await this.userRepo.findOne({ where: { email: updateUserDto.email } });
    if (user) {
      await this.mailService.sendForgetPassword(user);
      return { statusCode: HttpStatus.OK, message: `Reset password link is sent` };
    } else {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `Invalid email` };
    }
  }

  findAll() {
    return this.userRepo.find({
      relations: {
        role: true
      },
    })
  }

  async findOne(id: string) {
    if (await isExists(id, this.userRepo)) {
      const user = this.userRepo.createQueryBuilder("users")
        .innerJoinAndSelect(
          "users.role",
          "roles"
        )
        .where("users.id = :id", { id: id })
        .getOne();

      return toUserDto(await user)
    } else {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `User not found` };
    }
  }


  async change_password(updateUserDto: UpdateUserDto) {

    const current_user = await this.userRepo.findOne({ where: { password_reset_token: updateUserDto.password_reset_token } });
    if (current_user) {
      if (current_user.password_reset_token === updateUserDto.password_reset_token) {
        updateUserDto.password_reset_token = uuid();
        const { password_reset_token, password } = updateUserDto;
        const user: User = this.userRepo.create({ password_reset_token, password });
        this.userRepo.update(current_user.id, user);
        return { statusCode: HttpStatus.OK, message: `Password updated successfully` };

      } else {
        return { statusCode: HttpStatus.UNAUTHORIZED, message: `Password reset token not matching` };
      }

    } else {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `Invalid link` };
    }
  }


  async confirm_registration(id: string) {

    const current_user = await this.userRepo.findOne({ where: { id: id } });
    if (current_user) {
      if (!current_user.is_registration_confirmed) {
        current_user.is_registration_confirmed = true;

        this.userRepo.update(current_user.id, current_user);
        return { statusCode: HttpStatus.OK, message: `Confirmed successfully` };

      } else {
        return { statusCode: HttpStatus.UNAUTHORIZED, message: `Invalid link` };
      }

    } else {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `Invalid link` };
    }
  }

  async update(updateUserDto: UpdateUserDto) {
    const existingUser = await this.userRepo.findOne({ where: { id: updateUserDto.id } });


    if (existingUser) {
      switch (true) {
        case updateUserDto.profile_photo !== undefined:

          existingUser.profile_photo = updateUserDto.profile_photo;
          console.log(existingUser, updateUserDto, 'with profile photo');
          this.userRepo.update(existingUser.id, existingUser);
          return { statusCode: HttpStatus.OK, message: `Updated successfully` };

        case updateUserDto.password !== undefined:

          console.log(updateUserDto, 'with pass');
          const areEqual = await bcrypt.compare(updateUserDto.current_password, existingUser.password);
          if (!areEqual) {
            return { statusCode: HttpStatus.UNAUTHORIZED, message: `Current password is not correct` };
          } else {
            const { id, password } = updateUserDto;
            if (!await bcrypt.compare(password, existingUser.password)) {
              const user: User = this.userRepo.create({ id, password });
              this.userRepo.update(user.id, user);
              return { statusCode: HttpStatus.OK, message: `Password updated successfully` };
            } else {
              return { statusCode: HttpStatus.UNAUTHORIZED, message: `Please choose different password` };
            }
          }

        default:

          existingUser.names = updateUserDto.names;
          existingUser.email = updateUserDto.email;
          existingUser.role = updateUserDto.role;
          console.log(existingUser, updateUserDto, 'with details');
          this.userRepo.update(existingUser.id, existingUser);
          return { statusCode: HttpStatus.OK, message: `Updated successfully` };
      }


    } else {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `User not found` };
    }
  }

  async remove(id: string) {
    if (await isExists(id, this.userRepo)) {
      await this.userRepo.delete(id);
      return { statusCode: HttpStatus.OK, message: `Deleted successfully` };
    } else {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: `User not found` };
    }
  }

}
