import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { NotificationService } from './Services/NotificationService';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [NotificationService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.sendNotification()).toBe('Hello World!');
    });
  });
});
