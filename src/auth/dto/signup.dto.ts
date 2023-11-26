import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class signupDTO {
  @ApiProperty()
  @IsNotEmpty()
  tai_khoan: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  mat_khau: string;

  @ApiProperty()
  @IsNotEmpty()
  ho_ten: string;

  @ApiProperty()
  @IsNotEmpty()
  so_dt: string;

  @ApiProperty()
  @IsNotEmpty()
  loai_nguoi_dung: string = 'thanh_vien';
}
