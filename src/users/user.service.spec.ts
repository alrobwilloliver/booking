import { UsersService } from './user.service';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';

describe('UserService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            findOne: jest.fn().mockResolvedValue({ id: 1, username: 'test' }),
            save: jest.fn().mockResolvedValue({ id: 1, username: 'test' }),
          },
        },
      ],
    }).compile();
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a user sucessfully', async () => {
    const result = await service.findOne('alrobwilloliver@gmail.com');
    expect(result).toBeDefined();
    expect(result.username).toBe('test');
  });

  it('should create a user successfully', async () => {
    const result = await service.create({
      username: 'test',
      password: 'test',
    });
    expect(result).toBeDefined();
    expect(result.username).toBe('test');
  });
});
