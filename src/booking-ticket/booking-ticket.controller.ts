import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookingTicketService } from './booking-ticket.service';
import { CreateBookingTicketDto } from './dto/create-booking-ticket.dto';
import { UpdateBookingTicketDto } from './dto/update-booking-ticket.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Booking Ticket')
@Controller('api/BookingTicket')
export class BookingTicketController {
  constructor(private readonly bookingTicketService: BookingTicketService) {}
  @Post()
  bookingTicked(@Body() creatBookingTicketDto: CreateBookingTicketDto) {
    return this.bookingTicketService.bookingTicked(creatBookingTicketDto);
  }
}
