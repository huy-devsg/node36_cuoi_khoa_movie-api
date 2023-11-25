import { Injectable } from '@nestjs/common';
import { CreateShowtimeDto } from './dto/create-showtime.dto';
import { UpdateShowtimeDto } from './dto/update-showtime.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ShowtimesService {
  prisma = new PrismaClient();
  create(createShowtimeDto: CreateShowtimeDto) {
    return 'This action adds a new showtime';
  }

  async getShowtimesById(showtimesId: number) {
    console.log('showtimesId: ', showtimesId);
    const data = await this.prisma.lichChieu.findMany({
      where: {
        ma_lich_chieu: showtimesId,
      },
      include: {
        RapPhim: true,
        Phim: true,
      },
    });
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} showtime`;
  }

  update(id: number, updateShowtimeDto: UpdateShowtimeDto) {
    return `This action updates a #${id} showtime`;
  }

  remove(id: number) {
    return `This action removes a #${id} showtime`;
  }
}
