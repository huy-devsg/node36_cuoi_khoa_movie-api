import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBookingTicketDto {
  @ApiProperty()
  @IsNotEmpty()
  tai_khoan: number;
  @ApiProperty()
  @IsNotEmpty()
  ma_lich_chieu: number;
  @ApiProperty()
  @IsNotEmpty()
  ma_ghe: number;
}
