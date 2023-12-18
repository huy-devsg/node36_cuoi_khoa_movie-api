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
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { ShowtimesService } from './showtimes.service';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/authGuard';
import { getData } from './interface';

@ApiTags('Showtimes')
@Controller('api/Showtimes')
export class ShowtimesController {
  constructor(private readonly showtimesService: ShowtimesService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('CreateShowtimes')
  createShowtimes(@Body() body: CreateShowtimeDto, @Req() req: getData) {
    if (req.user.role === 'admin') {
      return this.showtimesService.createShowtimes(body);
    }
    throw new UnauthorizedException('Bạn không có quyền truy cập!');
  }

  @Get('ListShowtimes')
  getShowtimesById(@Query('MaLichChieu') ma_lich_chieu: number) {
    return this.showtimesService.getShowtimesById(+ma_lich_chieu);
  }
}
