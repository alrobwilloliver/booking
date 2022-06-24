import { Controller, Get, Patch, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getBookings() {
    return this.bookingService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/confirm')
  confirmBooking(@Param() params) {
    return this.bookingService.update(params);
  }
}
