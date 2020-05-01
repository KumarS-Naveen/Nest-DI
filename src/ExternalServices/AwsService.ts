import { Injectable } from '@nestjs/common';
import { IEmailService } from '../Services/IEmailService';

@Injectable()
export class AwsService implements IEmailService {
  sendEmail(emailId:string): string {
    return "email sent to "+ emailId;
  }
}
