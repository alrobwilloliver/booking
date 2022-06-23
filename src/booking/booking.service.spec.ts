import { BookingService } from './booking.service';

import { Test, TestingModule } from '@nestjs/testing';
import { bookings } from './booking.interface';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingService],
    }).compile();
    service = module.get<BookingService>(BookingService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all bookings', () => {
    expect(service.findAll()).toBeDefined();
    expect(service.findAll()).toBe(bookings);
  });

  it('should return a confirmed booking', () => {
    expect(service.update(1)).toBeDefined();
    expect(service.update(1).confirmed).toBe(true);
  });
});
