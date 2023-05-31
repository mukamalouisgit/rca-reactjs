import { Injectable } from '@nestjs/common';

@Injectable()
export class DashoardService {

  getHome() {
    return "hello here : Information to the public"
  }
  getNormalUserDashboard() {
    return "hello here : Normal user"
  }
  getAdminDashboard() {
    return "hello here : Admin Dashboard"
  }
  getSuperAdminDashboard() {
    return "hello here : Super-Admin dashboard"
  }
}
