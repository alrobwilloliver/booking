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
    expect(result.data).toStrictEqual(bookings);
    expect(result.message).toBe('Bookings found');
    expect(result.status).toBe(200);
  });

  it('should return a confirmed booking', async () => {
    const res = await service.update(bookings[0]);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.message).toBe('Booking updated');
  });
});
