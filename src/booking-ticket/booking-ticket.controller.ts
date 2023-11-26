import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { BookingTicketService } from './booking-ticket.service';
import { CreateBookingTicketDto } from './dto/create-booking-ticket.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/authGuard';
@ApiTags('Booking Ticket')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/BookingTicket')
export class BookingTicketController {
  constructor(private readonly bookingTicketService: BookingTicketService) {}
  @Post()
  bookingTicked(@Body() creatBookingTicketDto: CreateBookingTicketDto) {
    return this.bookingTicketService.bookingTicked(creatBookingTicketDto);
  }
}
