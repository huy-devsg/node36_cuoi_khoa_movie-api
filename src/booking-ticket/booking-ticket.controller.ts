import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BookingTicketService } from './booking-ticket.service';
import { CreateBookingTicketDto } from './dto/create-booking-ticket.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/authGuard';
@ApiTags('Booking Ticket')
@Controller('api/BookingTicket')
export class BookingTicketController {
  constructor(private readonly bookingTicketService: BookingTicketService) {}
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  bookingTicked(@Body() creatBookingTicketDto: CreateBookingTicketDto) {
    return this.bookingTicketService.bookingTicked(creatBookingTicketDto);
  }
}
