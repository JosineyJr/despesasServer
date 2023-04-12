import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './modules/persons/persons.module';
import { AccountsModule } from './modules/accounts/accounts.module';

@Module({
  imports: [PersonsModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
