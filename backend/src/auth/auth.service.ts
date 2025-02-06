import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto/login.dto';
import { JwtService } from '@nestjs/jwt';
const fake: LoginDto[] = [
  {
    username: 'I',
    password: 'B',
  },
  {
    username: 'R',
    password: 'Q',
  },
];
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  login({ username, password }: LoginDto) {
    const dbUser = fake.find((user) => user.username === username);
    if (!dbUser) return null;
    if (dbUser.password === password) {
      const { password, ...user } = dbUser;
      return this.jwtService.sign(user);
    }
  }
}
