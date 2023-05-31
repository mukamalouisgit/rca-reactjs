"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const user_entity_1 = require("./users/entities/user.entity");
const roles_module_1 = require("./roles/roles.module");
const role_entity_1 = require("./roles/entities/role.entity");
const dashboard_controller_1 = require("./dashoard/dashboard.controller");
const dashoard_service_1 = require("./dashoard/dashoard.service");
const mail_module_1 = require("./mail/mail.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'auth_app',
                entities: [user_entity_1.User, role_entity_1.Role],
                synchronize: true,
                logging: true
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            mail_module_1.MailModule
        ],
        controllers: [app_controller_1.AppController, dashboard_controller_1.DashboardController],
        providers: [app_service_1.AppService, dashoard_service_1.DashoardService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map