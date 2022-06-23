import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/user.service';
import { User } from './entity/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        AuthService,
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn().mockReturnValueOnce({ id: 1, username: 'test' }),
            create: jest
              .fn()
              .mockReturnValueOnce({ id: 1, username: 'new-test' }),
          },
        },
        ConfigService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('token'),
          },
        },
      ],
      imports: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('login', () => {
    it('returns a token', async () => {
      const token = await appController.login({
        user: {
          username: 'test',
          id: 1,
        },
      });
      expect(token).toBeDefined();
      const want = { access_token: 'token' };
      expect(token).toStrictEqual(want);
    });
  });

  describe('signup', () => {
    it('fails when user exists and succeeds when no user', async () => {
      try {
        await appController.register({
          user: {
            username: 'test',
            id: 1,
          },
        });
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toBe('User already exists');
      }
      const token = await appController.register({
        user: {
          username: 'test',
          id: 1,
        },
      });
      expect(token).toBeDefined();
      const want = { access_token: 'token' };
      expect(token).toStrictEqual(want);
    });
  });
});
