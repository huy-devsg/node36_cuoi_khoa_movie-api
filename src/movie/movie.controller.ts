import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
  UnauthorizedException,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { MovieService } from './movie.service';
import { Response } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiFile } from './apiFile';
import { JwtAuthGuard } from 'src/auth/authGuard';
import { CreateFilmDto } from './dto/create-film.dto';
import { getData } from './interface';
import { UpdateFilmDto } from './dto/update-film.dto';

@ApiTags('Movie')
@Controller('api/Movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  @Get('/GetListBanner')
  async getListBanner(@Res() res: Response) {
    res.send({
      message: 'Xử lí thành công!',
      data: (await this.movieService.getListBanner()).data,
    });
  }
  @Get('/GetListFilms')
  async getListFilms(@Res() res: Response) {
    res.send({
      message: 'Xử lí thành công!',
      data: (await this.movieService.getListFilms()).data,
    });
  }
  @Get('/GetListFilmsPagination')
  async getListFilmsPagination(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Res() res: Response,
  ) {
    res.send({
      message: 'Xử lí thành công!',
      data: (await this.movieService.getListFilmsPagination(+page, +perPage))
        .data,
    });
  }
  @Get('/SearchFilmsByName')
  async getListFilmsByName(@Query('name') name: string, @Res() res: Response) {
    res.send({
      message: 'Xử lí thành công!',
      data: (await this.movieService.getListFilmsByName(name)).data,
    });
  }
  @Get('/SearchFilmsByNamePagination')
  async getListFilmsByNamePagination(
    @Query('name') name: string,
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Res() res: Response,
  ) {
    res.send({
      message: 'Xử lí thành công!',
      data: (
        await this.movieService.getListFilmsByNamePagination(
          name,
          +page,
          +perPage,
        )
      ).data,
    });
  }
  @Get('/FilmInformation')
  async getFilmInfor(@Query('ma_phim') ma_phim: string, @Res() res: Response) {
    res.send({
      message: 'Xử lí thành công!',
      data: (await this.movieService.getFilmInfor(+ma_phim)).data,
    });
  }
  @Get('/GetListFilmsByDay')
  getListFilmsByDay(
    @Query('fromDate') fromDate: string,
    @Query('toDate') toDate: string,
  ) {
    return this.movieService.getListFilmsByDay(fromDate, toDate);
  }

  @Post('/upload-movieImg/:id')
  @ApiConsumes('multipart/form-data')
  @ApiFile()
  @UseInterceptors(
    FilesInterceptor('file', 10, {
      storage: diskStorage({
        destination: process.cwd() + '/public/img',
        filename: (req, file, callback) =>
          callback(
            null, // define lỗi (ignore)
            new Date().getTime() + `_${file.originalname}`,
          ),
      }),
    }),
  )
  async uploadImg(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    for (const file of files) {
      console.log(file);
      res.send({
        message: 'Xử lí thành công!',
        data: await this.movieService.uploadMovieImg(
          +id,
          file.destination + '/' + file.originalname,
        ),
      });
    }
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/CreatFilm')
  creatFilm(@Body() CreateFilmDto: CreateFilmDto, @Req() req: getData) {
    if (req.user.role === 'admin') {
      return this.movieService.creatFilm(CreateFilmDto);
    } else {
      throw new UnauthorizedException('Bạn không có quyền truy cập!');
    }
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('/UpdateFilm/:filmId')
  updateFilm(
    @Param('filmId') filmId: string,
    @Body() body: UpdateFilmDto,
    @Req() req: getData,
  ) {
    if (req.user.role === 'admin') {
      return this.movieService.updateFilm(+filmId, body);
    }
    throw new UnauthorizedException('Bạn không có quyền truy cập!');
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/DeleteFilm/:filmId')
  deleteFilm(@Param('filmId') filmId: number, @Req() req: getData) {
    if (req.user.role === 'admin') {
      return this.movieService.deleteFilm(+filmId);
    }
    throw new UnauthorizedException('Bạn không có quyền truy cập!');
  }
}
