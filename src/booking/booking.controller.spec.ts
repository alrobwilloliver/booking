import { BookingController } from './booking.controller';

import { TestingModule, Test } from '@nestjs/testing';

describe('BookingController', () => {
  let controller: BookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingController],
    }).compile();

    controller = module.get<BookingController>(BookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return string of get booking', () => {
    expect(controller.getBooking()).toBe('This action returns a booking');
  });
  it('should return returned confirmed booking', () => {
    expect(controller.confirmBooking()).toBe('updated booking is confirmed');
  });
});
