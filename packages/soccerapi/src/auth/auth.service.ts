import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IUser } from 'src/users/user';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: IUser) {
    const payload = await this.usersService.checkPassword(
      user.email,
      user.password,
    );

    if (!payload) {
      throw new NotFoundException();
    }

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
