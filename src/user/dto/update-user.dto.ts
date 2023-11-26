import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  email: string;
  ho_ten: string;
  so_dt: string;
  loai_nguoi_dung: string;
}
