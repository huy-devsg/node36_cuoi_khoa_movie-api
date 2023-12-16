import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateFilmDto } from './create-film.dto';

export class UpdateFilmDto extends PartialType(CreateFilmDto) {
    @ApiProperty()
    @IsNotEmpty()
    ten_phim: string;
  
    @ApiProperty()
    @IsNotEmpty()
    trailer: string;
  
    @ApiProperty()
    @IsNotEmpty()
    hinh_anh: string;
  
    @ApiProperty()
    @IsNotEmpty()
    mo_ta: string;
  
    @ApiProperty()
    @IsNotEmpty()
    ngay_khoi_chieu: Date;
  
    @ApiProperty()
    @IsNotEmpty()
    danh_gia: number;
  
    @ApiProperty()
    hot: boolean;
    
    @ApiProperty()
    dang_chieu: boolean;
    
    @ApiProperty()
    sap_chieu: boolean;
}
