import { Controller, Get, Put } from '@nestjs/common';

@Controller('booking')
export class BookingController {
  @Get()
  getBookings(): string {
    return 'This action returns a bookings';
  }

  @Put()
  confirmBooking(): string {
    return 'updated booking is confirmed';
  }
}
