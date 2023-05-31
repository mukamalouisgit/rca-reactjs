import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DashoardService } from './dashoard.service';

@Controller('dashboard')
export class DashboardController {

    constructor(private readonly dashoardService: DashoardService) {}


    @Get("/normal-user")
    async getNormalUserDashboard() {
      return this.dashoardService.getNormalUserDashboard();
    }
    @Get("/super-admin")
    @UseGuards(AuthGuard('jwt'))
    async getSuperAdminDashboard() {
      return this.dashoardService.getSuperAdminDashboard();
    }
    @Get("/admin")
    @UseGuards(AuthGuard('jwt'))
    async getAdminDashboard() {
      return this.dashoardService.getAdminDashboard();
    }
    @Get("/home")
    @UseGuards(AuthGuard('jwt'))
    async getHome() {
      return this.dashoardService.getHome();
    }
}
