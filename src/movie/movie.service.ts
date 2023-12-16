import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Injectable()
export class MovieService {
  prisma = new PrismaClient();

  async getListBanner() {
    try {
      const data = await this.prisma.banner.findMany({});
      return { data };
    } catch {}
  }
  async getListFilms() {
    try {
      const data = await this.prisma.phim.findMany({});
      return { data };
    } catch {}
  }
  async getListFilmsPagination(page: number, perPage: number) {
    try {
      const skip = (page - 1) * perPage;
      const data = await this.prisma.phim.findMany({
        skip,
        take: perPage,
      });
      return { data };
    } catch {}
  }
  async getListFilmsByName(name: string) {
    try {
      const data = await this.prisma.phim.findMany({
        where: {
          ten_phim: {
            contains: name,
          },
        },
      });
      return { data };
    } catch {}
  }
  async getListFilmsByNamePagination(
    name: string,
    page: number,
    perPage: number,
  ) {
    try {
      const data = await this.prisma.phim.findMany({
        where: {
          ten_phim: {
            contains: name,
          },
        },
      });

      const start = (page - 1) * perPage;
      const end = start + perPage;
      const paginatedData = data.slice(start, end);

      const totalCount = data.length;
      const totalPages = Math.ceil(totalCount / perPage);

      return { data: paginatedData, totalCount, totalPages };
    } catch (error) {
      throw new Error('Error while fetching data');
    }
  }
  async getFilmInfor(id: number) {
    try {
      const data = await this.prisma.phim.findUnique({
        where: {
          ma_phim: id,
        },
      });
      return { data };
    } catch {
      throw new Error("Can't find filmID!");
    }
  }
  async getListFilmsByDay(fromDate: string, toDate: string) {
    try {
      const data = await this.prisma.phim.findMany({
        where: {
          ngay_khoi_chieu: {
            gte: new Date(fromDate), // Greater than or equal to 'from'
            lte: new Date(toDate), // Less than or equal to 'to'
          },
        },
      });
      return { data };
    } catch {}
  }
  async uploadMovieImg(id: number, avatar: string) {
    try {
      const data = await this.prisma.phim.findUnique({
        where: {
          ma_phim: id,
        },
      });
      if (!data) {
        throw new Error(`Movie with id ${id} not found`);
      }
      const upload = await this.prisma.phim.update({
        where: {
          ma_phim: id,
        },
        data: {
          hinh_anh: avatar,
        },
      });

      return { data: upload };
    } catch (err) {
      throw new Error(`Error creating user: ${err}`);
    }
  }
  async creatFilm(body: CreateFilmDto) {
    try {
      const data = await this.prisma.phim.create({
        data:  body 
      });
      return { data };
    } catch (err) {
      throw new Error(`Error creating user: ${err}`);
    }
  }
  async updateFilm(filmId: number, body: UpdateFilmDto) {
    try {
      const data = await this.prisma.phim.update({
        where: {
          ma_phim: filmId,
        },
        data: body,
      });
      return { data };
    } catch {}
  }
  async deleteFilm(filmId: number) {
    try {
      const data = await this.prisma.phim.delete({
        where: {
            ma_phim: filmId,
        },
      });
      return { data };
    } catch {}
  }
}
