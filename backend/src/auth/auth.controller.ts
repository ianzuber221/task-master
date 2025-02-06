import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  HttpException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto/login.dto';
import { RegisterDto } from './dto/register.dto/register.dto';
import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  login(@Body() loginDto: LoginDto) {
    const loginState = this.authService.login(loginDto);
    console.log(loginState);
    if (loginState) return loginState;
    throw new HttpException('Invalid Credentials', 401);
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto) { };

  @Post('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) { }
}
