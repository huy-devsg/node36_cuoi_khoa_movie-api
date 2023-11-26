import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  prisma = new PrismaClient();
  selectInfoUser = {
    tai_khoan: true,
    ho_ten: true,
    email: true,
    so_dt: true,
    loai_nguoi_dung: true,
  };
  async getListUserPagination(page: number, perPage: number) {
    try {
      const skip = (page - 1) * perPage;
      const data = await this.prisma.nguoiDung.findMany({
        select: this.selectInfoUser,
        skip,
        take: perPage,
      });
      return { data };
    } catch {}
  }
  async getListUserByType(type: string) {
    try {
      const data = await this.prisma.nguoiDung.findMany({
        select: this.selectInfoUser,

        where: {
          loai_nguoi_dung: type,
        },
      });
      return { data };
    } catch {}
  }

  async getListUserByName(name: string) {
    try {
      const data = await this.prisma.nguoiDung.findMany({
        select: this.selectInfoUser,
        where: {
          ho_ten: {
            contains: name,
          },
        },
      });
      return { data };
    } catch {}
  }
  async getListUserByNamePagination(
    name: string,
    page: number,
    perPage: number,
  ) {
    try {
      const data = await this.prisma.nguoiDung.findMany({
        select: this.selectInfoUser,
        where: {
          ho_ten: {
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
  async getUserInfor(userId: number) {
    try {
      const data = await this.prisma.nguoiDung.findUnique({
        select: this.selectInfoUser,
        where: {
          tai_khoan: userId,
        },
      });
      return { data };
    } catch {}
  }
  async updateUser(userId: number, body: UpdateUserDto) {
    try {
      const data = await this.prisma.nguoiDung.update({
        where: {
          tai_khoan: userId,
        },
        data: body,
      });
      return { data };
    } catch {}
  }

  async deleteUser(userId: number) {
    try {
      const data = await this.prisma.nguoiDung.delete({
        where: {
          tai_khoan: userId,
        },
      });
      return { data };
    } catch {}
  }
}
