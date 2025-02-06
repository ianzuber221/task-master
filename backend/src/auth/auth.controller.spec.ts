import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, JwtService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should have a login method', () => {
    expect(controller.login).toBeDefined();
  });
  it('should have a login method', () => {
    expect(controller.login).toBeDefined();
  });
  it('should have a register method', () => {
    expect(controller.register).toBeDefined();
  });
  it('should have a profile method', () => {
    expect(controller.getProfile).toBeDefined();
  });
});
