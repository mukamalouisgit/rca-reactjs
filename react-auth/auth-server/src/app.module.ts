import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';
import { DashboardController } from './dashoard/dashboard.controller';
import { DashoardService } from './dashoard/dashoard.service';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'auth_app',
      entities: [User, Role],
      synchronize: true,
      logging: true
    }),
    UsersModule,
    RolesModule,
    MailModule
  ],

  controllers: [AppController, DashboardController],
  providers: [AppService, DashoardService],
})
export class AppModule { }
