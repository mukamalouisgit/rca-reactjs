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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
        this.BASE_URL = "http://localhost:4200";
    }
    async sendForgetPassword(user) {
        const url = this.BASE_URL + "/change-password/" + user.password_reset_token;
        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Forget Password',
            template: './forgetPassword',
            context: {
                name: user.names,
                url,
            },
        });
    }
    async sendRegistrationConfirmation(id, email, names) {
        console.log(id, email, names);
        const url = this.BASE_URL + "/confirm-registration/" + id;
        await this.mailerService.sendMail({
            to: email,
            subject: 'Registration Confirmation',
            template: './sendRegistrationConfirmation',
            context: {
                name: names,
                url,
            },
        });
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map