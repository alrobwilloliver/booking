import { BookingService } from './booking.service';

import { Test, TestingModule } from '@nestjs/testing';
import { Booking } from '../entity/booking.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

import { bookings } from './booking.interface';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingService,
        {
          provide: getRepositoryToken(Booking),
          useValue: {
            find: jest.fn().mockResolvedValue(bookings),
            findOneBy: jest.fn().mockResolvedValue({ id: 1 }),
            update: jest.fn().mockReturnValue({ affected: 1 }),
          },
        },
      ],
    }).compile();
    service = module.get<BookingService>(BookingService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all bookings', async () => {
    const result = await service.findAll();
    expect(result).toBeDefined();
    expect(result).toBe(bookings);
  });

  it('should return a confirmed booking', async () => {
    const res = await service.update(bookings[0]);
    expect(res).toBeDefined();
    expect(res.affected == 1).toBe(true);
  });
});
