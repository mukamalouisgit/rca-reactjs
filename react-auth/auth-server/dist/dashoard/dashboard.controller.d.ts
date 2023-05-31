import { DashoardService } from './dashoard.service';
export declare class DashboardController {
    private readonly dashoardService;
    constructor(dashoardService: DashoardService);
    getNormalUserDashboard(): Promise<string>;
    getSuperAdminDashboard(): Promise<string>;
    getAdminDashboard(): Promise<string>;
    getHome(): Promise<string>;
}
