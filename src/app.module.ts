import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeNumberCheckerController } from './prime-number-checker/prime-number-checker.controller';

@Module({
  imports: [],
  controllers: [AppController, PrimeNumberCheckerController],
  providers: [AppService],
})
export class AppModule {}
