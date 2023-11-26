import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateBookingTicketDto } from './dto/create-booking-ticket.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BookingTicketService {
  prisma = new PrismaClient();

  async bookingTicked(dataBooking: CreateBookingTicketDto) {
    try {
      const { ma_ghe, ma_lich_chieu } = dataBooking;

      const getChair = await this.prisma.ghe.findFirst({
        where: {
          ma_ghe,
        },
      });

      if (!getChair) {
        throw new HttpException(
          'Không có ghế trong cơ sở dữ liệu',
          HttpStatus.NOT_FOUND,
        );
      }

      const seatExists = await this.prisma.datVe.findMany({
        where: {
          ma_ghe,
          ma_lich_chieu,
        },
      });

      if (seatExists.length > 0) {
        throw new HttpException(
          'Ghế đã được đặt trong lịch chiếu này',
          HttpStatus.BAD_REQUEST,
        );
      }

      const data = await this.prisma.datVe.create({
        data: dataBooking,
      });

      return { data };
    } catch (error) {
      throw error;
    }
  }
}
