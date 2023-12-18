import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateShowtimeDto {
  @ApiProperty()
  @IsNotEmpty()
  ma_rap: number;
  @ApiProperty()
  @IsNotEmpty()
  ma_phim: number;
  @ApiProperty()
  @IsNotEmpty()
  ngay_gio_chieu: Date = new Date();
  @ApiProperty()
  @IsNotEmpty()
  gia_ve: number;
}
