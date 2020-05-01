import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './Services/NotificationService';

@Controller()
export class AppController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  sendNotification(): string {
 
    return this.notificationService.send('someemailid@gmail.com');
  }
}
