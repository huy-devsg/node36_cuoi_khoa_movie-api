import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginDTO } from './dto/login.dto';
import { signupDTO } from './dto/signup.dto';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  prisma = new PrismaClient();

  async login(body: loginDTO) {
    const { email, mat_khau } = body;
    try {
      const user = await this.prisma.nguoiDung.findFirst({
        where: {
          email,
        },
      });
      if (!user) {
        throw new UnauthorizedException();
      }

      const passComparre = await bcrypt.compare(mat_khau, user.mat_khau);

      if (!passComparre) {
        throw new UnauthorizedException();
      }
      const token = this.jwtService.sign(
        { data: { id: user.tai_khoan, email } },
        {
          expiresIn: this.configService.get('EXPIRES_IN'),
          secret: this.configService.get('SECRET_KEY'),
        },
      );
      return {
        status: 200,
        message: 'Đăng nhập thành công',
        accessToken: token,
      };
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  async signup(body: signupDTO) {
    const { email, mat_khau } = body;
    try {
      const passBcrypt: string = await bcrypt.hash(mat_khau, 10);
      const checkEmail = await this.prisma.nguoiDung.findFirst({
        where: {
          email,
        },
      });

      if (!checkEmail) {
        const data = await this.prisma.nguoiDung.create({
          data: { ...body, mat_khau: passBcrypt },
        });
        return { data };
      }
      return {
        status: 400,
        message: 'Email đã tồn tại. ',
      };
    } catch (err) {
      throw new Error(`Error creating user: ${err}`);
    }
  }
}
