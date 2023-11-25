import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingTicketModule } from './booking-ticket/booking-ticket.module';
import { ShowtimesModule } from './showtimes/showtimes.module';

@Module({
  imports: [BookingTicketModule, ShowtimesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
