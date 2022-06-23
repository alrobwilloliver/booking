import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { BookingService } from './booking.service';
import { updateDto } from './booking.interface';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getBookings() {
    return this.bookingService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/confirm')
  confirmBooking(booking: updateDto) {
    return this.bookingService.update(booking);
  }
}
