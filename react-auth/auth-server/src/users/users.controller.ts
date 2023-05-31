/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/user-login.dto';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.sign_up(createUserDto);
  }

  @Post('/signin')
  public async login(@Body() loginUserDto: LoginUserDto) {
    return await this.usersService.login(loginUserDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('/forget-password')
  forget_password(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.forget_password(updateUserDto);
  }

  @Put('update')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(
    FileInterceptor('profile_photo', {
      storage: diskStorage({
        destination: './uploads/profilePic',
        filename: (req, profile_photo, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(
            null,
            `${randomName}${extname(profile_photo.originalname)}`,
          );
        },
      }),
    }),
  )
  update(@Body() updateUserDto: UpdateUserDto, @UploadedFile() file) {
    if (file) {
      updateUserDto.profile_photo = file.filename;
    }
    return this.usersService.update(updateUserDto);
  }

  @Put('change-password')
  change_password(@Body() updateUserDto: UpdateUserDto, @UploadedFile() file) {
    return this.usersService.change_password(updateUserDto);
  }

  @Put('confirm-registration/:id')
  confirm_registration(@Param('id') id: string) {
    return this.usersService.confirm_registration(id);
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: string): Promise<any> {
    return await this.usersService.remove(id);
  }

  @Get('/profile/:imgpath')
  // @UseGuards(AuthGuard('jwt'))
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './uploads/profilePic' });
  }
}
