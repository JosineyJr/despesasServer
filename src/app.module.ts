import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './modules/persons/persons.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { BillsModule } from './modules/bills/bills.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [PersonsModule, PaymentsModule, BillsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
