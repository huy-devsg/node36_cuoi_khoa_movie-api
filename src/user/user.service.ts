import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  prisma = new PrismaClient();
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async getListUserByType(type: string) {
    try {
      const data = await this.prisma.nguoiDung.findMany({
        select: {
          tai_khoan: true,
          ho_ten: true,
          email: true,
          so_dt: true,
          loai_nguoi_dung: true,
        },
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
        where: {
          ho_ten: {
            contains: name,
          },
        },
      });
      return { data };
    } catch {}
  }
  async getUserInfor(userId: number) {
    try {
      const data = await this.prisma.nguoiDung.findUnique({
        select: {
          tai_khoan: true,
          ho_ten: true,
          email: true,
          so_dt: true,
          loai_nguoi_dung: true,
        },
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
