import { Controller, Get } from '@nestjs/common';
import { AwsService } from 'src/ExternalServices/AwsService';

// @Controller()
export class AppController {
  constructor(private readonly awsService: AwsService) {}

  @Get()
  sendNotification(): string {
    return this.awsService.sendEmail('someemailid@gmail.com');
  }
}
