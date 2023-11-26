import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
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
