import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  ho_ten: string;

  @ApiProperty()
  @IsNotEmpty()
  so_dt: string;

  @ApiProperty()
  @IsNotEmpty()
  loai_nguoi_dung: string;
}
