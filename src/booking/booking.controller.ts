import { Controller, Get, Patch } from '@nestjs/common';
import { BookingService } from './booking.service';

interface updateDto {
  id: number;
}

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}
  @Get('booking')
  getBookings() {
    return this.bookingService.findAll();
  }

  @Patch('booking/:id/confirm')
  confirmBooking(booking: updateDto) {
    return this.bookingService.update(booking);
  }
}
