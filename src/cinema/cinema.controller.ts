import { Controller, Get, Query, Res } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CinemaService } from './cinema.service';
import { Response } from 'express';

@ApiTags('Cinema')
@Controller('api/Cinema')
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}
  @Get('/CinemaInformation')
  @ApiQuery({ name: 'mahethongrap', required: false })
  async getCinemaInfor(
    @Query('mahethongrap') mahethongrap: string,
    @Res() res: Response,
  ) {
    res.send({
      message: 'Xử lí thành công!',
      data: (await this.cinemaService.getCinemaInfor(+mahethongrap)).data,
    });
  }
  @Get('/CinemaComplexInformation')
  async getCinemaComplexInfor(
    @Query('mahethongrap') mahethongrap: string,
    @Res() res: Response,
  ) {
    res.send({
      message: 'Xử lí thành công!',
      data: (await this.cinemaService.getCinemaComplexInfor(+mahethongrap))
        .data,
    });
  }
  @ApiQuery({ name: 'mahethongrap', required: false })
  @Get('/getShowtimeCinemaComplexInfor')
  async getShowtimeCinemaComplexInfor(
    @Query('mahethongrap') mahethongrap: string,
    @Res() res: Response,
  ) {
    res.send({
      message: 'Xử lí thành công!',
      data: (
        await this.cinemaService.getShowtimeCinemaComplexInfor(+mahethongrap)
      ).data,
    });
  }
  @Get('/getShowtimeInfor')
  async getShowtimeInfor(
    @Query('maPhim') maPhim: string,
    @Res() res: Response,
  ) {
    res.send({
      message: 'Xử lí thành công!',
      data: (await this.cinemaService.getShowtimeInfor(+maPhim)).data,
    });
  }
}
