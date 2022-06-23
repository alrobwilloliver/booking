import { BookingController } from './booking.controller';

import { TestingModule, Test } from '@nestjs/testing';
import { BookingService } from './booking.service';

import { getRepositoryToken } from '@nestjs/typeorm';
import { Booking } from '../entity/booking.entity';
import { bookings } from './booking.interface';

describe('BookingController', () => {
  let controller: BookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingController,
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

    controller = module.get<BookingController>(BookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return string of get booking', async () => {
    const result = await controller.getBookings();
    expect(result).toBe(bookings);
  });
  it('should return returned confirmed booking', async () => {
    const result = await controller.confirmBooking({ id: 1 });
    expect(result).toBeDefined();
    expect(result.affected == 1).toBe(true);
  });
});
