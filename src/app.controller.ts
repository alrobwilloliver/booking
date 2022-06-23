import { Controller } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

import { UseGuards, Post, Request, Body } from '@nestjs/common';

import { LocalAuthGuard } from './auth/local-auth.guard';
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/signup')
  public async register(@Body() createUserDto) {
    return this.authService.signUp(createUserDto);
  }
}
