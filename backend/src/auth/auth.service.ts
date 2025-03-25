import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthUser } from './auth.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

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
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(AuthUser) // Inject the repository for the User entity
    private readonly authUserRepository: Repository<AuthUser>
  ) {}
  async login({ username, password }: LoginDto) {
    const dbUser = await this.authUserRepository.findOneBy({ username });
    console.log(dbUser);
    if (!dbUser) return null;
    if (bcrypt.compareSync(password, dbUser.password)) {
      const { password, ...user } = dbUser;
      return this.jwtService.sign(user);
    }
  }
  async register(registerDto: RegisterDto) {
    const { username, email, password } = registerDto;
    // Check if user already exists
    const existingUser = await this.authUserRepository.findOne({
      where: [{ username }, { email }],
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const authUser = this.authUserRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    return this.authUserRepository.save(authUser);
  }
  getProfile(username: string) {
    return this.authUserRepository.findOne({
      where: { username },
      select: ['id', 'username', 'email', 'role'],
    });
  }
}
