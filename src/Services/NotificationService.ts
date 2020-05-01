import { Injectable } from '@nestjs/common';
import { IEmailService } from './IEmailService';

@Injectable()
export class NotificationService {

  constructor(private emailService: IEmailService){
    
  }
  send(emailID:string): string {
    // tak to database
    // get whatever information you need to send email
    return this.emailService.sendEmail(emailID);
  }
}
