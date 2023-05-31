import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MailService {
  BASE_URL: string = "http://localhost:4200";

  constructor(private mailerService: MailerService) { }

  async sendForgetPassword(user: User) {
    const url = this.BASE_URL+"/change-password/" + user.password_reset_token;
    await this.mailerService.sendMail({
      to: user.email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Forget Password',
      template: './forgetPassword', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: user.names,
        url,
      },
    });
  }

  async sendRegistrationConfirmation(id: string,email: string, names: string) {

    console.log(id, email, names);

    const url = this.BASE_URL+"/confirm-registration/" + id;
    await this.mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Registration Confirmation',
      template: './sendRegistrationConfirmation', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: names,
        url,
      },
    });
  }
}
