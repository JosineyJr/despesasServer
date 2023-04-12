import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './modules/persons/persons.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { PersonsModule } from './modules/persons/persons.module';

@Module({
  imports: [PersonsModule, AccountsModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
