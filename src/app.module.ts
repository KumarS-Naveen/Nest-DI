import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NotificationService } from './Services/NotificationService';
import { AwsService } from './ExternalServices/AwsService';
import { IEmailService } from './Services/IEmailService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [NotificationService,{
    provide: IEmailService,
    useClass: AwsService
  }],

})
export class AppModule {}
