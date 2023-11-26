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

@Controller('api/booking-ticket')
export class BookingTicketController {
  constructor(private readonly bookingTicketService: BookingTicketService) {}
  @Post()
  bookingTicked(@Body() creatBookingTicketDto: CreateBookingTicketDto) {
    return this.bookingTicketService.bookingTicked(creatBookingTicketDto);
  }

  @Get(':ticketId')
  getTicketById(@Param('ticketId') ticketId: number) {
    return this.bookingTicketService.getTicketById(+ticketId);
  }
}
