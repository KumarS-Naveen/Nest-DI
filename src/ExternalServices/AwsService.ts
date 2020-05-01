import { Injectable } from '@nestjs/common';
import { IEmailService } from '../Services/IEmailService';

@Injectable()
export class AwsService implements IEmailService {

  getAWSCred(){
    // get all the configuration related to AWS here
  }
  
  sendEmail(emailId:string): string {
    return "email sent to "+ emailId;
  }
}
