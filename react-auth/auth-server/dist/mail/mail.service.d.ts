import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/users/entities/user.entity';
export declare class MailService {
    private mailerService;
    BASE_URL: string;
    constructor(mailerService: MailerService);
    sendForgetPassword(user: User): Promise<void>;
    sendRegistrationConfirmation(id: string, email: string, names: string): Promise<void>;
}
