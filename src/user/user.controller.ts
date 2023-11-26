import {
  Controller,
  Get,
  Put,
  Body,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/authGuard';
@ApiTags('User')
@Controller('api/User')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/GetListUser')
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
  @Get('/UserInformation/:userId')
  getUserInfor(@Param('userId') userId: number) {
    return this.userService.getUserInfor(+userId);
  }
  @Put('/UpdateUser/:userId')
  updateUser(@Param('userId') userId: string, @Body() body: UpdateUserDto) {
    return this.userService.updateUser(+userId, body);
  }

  @Delete('/DeleteUser/:userId')
  deleteUser(@Param('userId') userId: number) {
    return this.userService.deleteUser(+userId);
  }
}
