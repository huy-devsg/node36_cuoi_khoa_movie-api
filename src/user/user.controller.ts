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
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('User')
@Controller('api/User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/GetListUserByType')
  getListUser(@Query('type') type: string) {
    return this.userService.getListUserByType(type);
  }

  @Get('/SearchUser')
  getListUserByName(@Query('name') name: string) {
    return this.userService.getListUserByName(name);
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
