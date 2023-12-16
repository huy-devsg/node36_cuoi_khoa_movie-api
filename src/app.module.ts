import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingTicketModule } from './booking-ticket/booking-ticket.module';
import { ShowtimesModule } from './showtimes/showtimes.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants/jwtConstants';
import { UserModule } from './user/user.module';
import { MovieService } from './movie/movie.service';
import { MovieController } from './movie/movie.controller';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    BookingTicketModule,
    ShowtimesModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: process.env.EXPIRES_IN },
    }),
    UserModule,
    MovieModule,
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService],
})
export class AppModule {}
