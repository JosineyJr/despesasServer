import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './modules/persons/persons.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { BillsModule } from './modules/bills/bills.module';

@Module({
  imports: [PersonsModule, PaymentsModule, BillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
