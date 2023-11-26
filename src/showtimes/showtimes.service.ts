import { Injectable } from '@nestjs/common';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ShowtimesService {
  prisma = new PrismaClient();

  async createShowtimes(body: CreateShowtimeDto) {
    try {
      const data = await this.prisma.lichChieu.create({
        data: body,
      });
      return { data };
    } catch {
      throw new Error();
    }
  }

  async getShowtimesById(showtimesId: number) {
    try {
      const data = await this.prisma.lichChieu.findMany({
        where: {
          ma_lich_chieu: showtimesId,
        },
        include: {
          RapPhim: true,
          Phim: true,
        },
      });
      return { data };
    } catch {
      throw new Error();
    }
  }
}
