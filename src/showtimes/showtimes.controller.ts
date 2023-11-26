import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Query,
  Req,
  Param,
  Delete,
} from '@nestjs/common';
import { ShowtimesService } from './showtimes.service';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';

@Controller('api/showtimes')
export class ShowtimesController {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @Post()
  createShowtimes(@Body() body: CreateShowtimeDto) {
    return this.showtimesService.createShowtimes(body);
  }
  @Get()
  getShowtimesById(@Query('MaLichChieu') ma_lich_chieu: number) {
    return this.showtimesService.getShowtimesById(+ma_lich_chieu);
  }
}
