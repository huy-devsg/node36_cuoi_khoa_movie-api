import { Injectable } from '@nestjs/common';
import { CreateBookingTicketDto } from './dto/create-booking-ticket.dto';
import { UpdateBookingTicketDto } from './dto/update-booking-ticket.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BookingTicketService {
  prisma = new PrismaClient();
  async bookingTicked(dataBooking: CreateBookingTicketDto) {
    try {
      const { ma_ghe } = dataBooking;
      const data = await this.prisma.datVe.create({
        data: dataBooking,
      });
      return data;
    } catch (err) {
      throw Error(err);
    }
  }
}
