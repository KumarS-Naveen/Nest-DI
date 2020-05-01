import { Injectable } from '@nestjs/common';


export abstract class IEmailService {
  abstract sendEmail(emailId:string): string ;
}
