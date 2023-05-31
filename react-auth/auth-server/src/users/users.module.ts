import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { jwtConstants } from 'src/utils/my_constants';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  PassportModule.register({
    defaultStrategy: 'jwt',
    property: 'user',
    session: false,
  }),
  JwtModule.register({
    secret: jwtConstants.SECRETKEY,
    signOptions: {
      expiresIn: jwtConstants.EXPIRESIN,
    },
  }),],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class UsersModule {}
