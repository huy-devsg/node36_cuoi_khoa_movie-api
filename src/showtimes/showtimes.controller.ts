import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { ShowtimesService } from './showtimes.service';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/authGuard';
@ApiTags('Showtimes')
@Controller('api/Showtimes')
export class ShowtimesController {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('CreateShowtimes')
  createShowtimes(@Body() body: CreateShowtimeDto) {
    return this.showtimesService.createShowtimes(body);
  }
  @Get('ListShowtimes')
  getShowtimesById(@Query('MaLichChieu') ma_lich_chieu: number) {
    return this.showtimesService.getShowtimesById(+ma_lich_chieu);
  }
}
