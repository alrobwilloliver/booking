import { Controller, Get, Put } from '@nestjs/common';

@Controller('booking')
export class BookingController {
  @Get()
  getBooking(): string {
    return 'This action returns a booking';
  }

  @Put()
  confirmBooking(): string {
    return 'updated booking is confirmed';
  }
}
