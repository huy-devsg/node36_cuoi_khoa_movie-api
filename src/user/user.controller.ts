import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  Query,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/authGuard';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { log } from 'console';
import { getData } from './interface';

@ApiTags('User')
@Controller('api/User')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get('/getListUser')
  getListUser() {
    return this.userService.getListUser();
  }
  @Get('/GetListUserByType')
  getListUserByType(@Query('type') type: string) {
    return this.userService.getListUserByType(type);
  }
  @Get('/GetListUserPagination')
  getListUserPagination(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
  ) {
    return this.userService.getListUserPagination(+page, +perPage);
  }
  @Get('/SearchUserByName')
  getListUserByName(@Query('name') name: string) {
    return this.userService.getListUserByName(name);
  }
  @Get('/SearchUserByNamePagination')
  getListUserByNamePagination(
    @Query('name') name: string,
    @Query('page') page: number,
    @Query('perPage') perPage: number,
  ) {
    return this.userService.getListUserByNamePagination(name, +page, +perPage);
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('/getUserInfoByToken')
  getUserInfoByToken(@Req() req: Request) {
    interface JwtPayload {
      data: any;
    }
    const authHeader = (req.headers as any).authorization.replace(
      'Bearer ',
      '',
    );
    const decodeToken = jwt.verify(
      authHeader,
      this.configService.get('SECRET_KEY'),
    ) as JwtPayload;
    const { id } = decodeToken.data;
    console.log(id);
    return this.userService.getUserInfoByToken(id);
  }
  @Get('/UserInformation/:userId')
  getUserInfor(@Param('userId') userId: number) {
    return this.userService.getUserInfor(+userId);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/creatUser')
  creatUser(@Body() CreateUserDto: CreateUserDto, @Req() req: getData) {
    if (req.user.role === 'admin') {
      return this.userService.creatUser(CreateUserDto);
    }
    throw new UnauthorizedException('Bạn không có quyền truy cập!');
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('/UpdateUser/:userId')
  updateUser(
    @Param('userId') userId: string,
    @Body() body: UpdateUserDto,
    @Req() req: getData,
  ) {
    if (req.user.role === 'admin') {
      return this.userService.updateUser(+userId, body);
    }
    throw new UnauthorizedException('Bạn không có quyền truy cập!');
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/DeleteUser/:userId')
  deleteUser(@Param('userId') userId: number, @Req() req: getData) {
    if (req.user.role === 'admin') {
      return this.userService.deleteUser(+userId);
    }
    throw new UnauthorizedException('Bạn không có quyền truy cập!');
  }
}
