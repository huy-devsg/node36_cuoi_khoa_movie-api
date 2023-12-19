import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  prisma = new PrismaClient();

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const decoded = this.jwtService.verify(token);
        const user = await this.prisma.nguoiDung.findUnique({
          where: {
            tai_khoan: decoded.data.id,
          },
        });
        request.user = { ...decoded, role: user.loai_nguoi_dung };
        return true;
      } catch (error) {
        throw new UnauthorizedException('Invalid token');
      }
    }

    throw new UnauthorizedException('Missing or invalid token');
  }
}
