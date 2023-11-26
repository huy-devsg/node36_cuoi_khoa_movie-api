import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateShowtimeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  ma_rap: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  ma_phim: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  ngay_gio_chieu: Date = new Date();

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  gia_ve: number;
}
