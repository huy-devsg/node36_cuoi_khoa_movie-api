import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class loginDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  mat_khau: string;
}
