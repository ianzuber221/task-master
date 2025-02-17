import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto/login.dto';

describe('AuthService', () => {
  let service: AuthService;
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
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should contain a login function', () => {
    expect(service.login).toBeDefined();
  });
});
