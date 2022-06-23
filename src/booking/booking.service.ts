import { Injectable } from '@nestjs/common';
import { Booking } from './booking.interface';

import { bookings } from './booking.interface';

@Injectable()
export class BookingService {
  private readonly booking: Booking[] = bookings;

  update(id: number): Booking {
    const booking = this.booking[id];
    return { ...booking, confirmed: true };
  }

  findAll(): Booking[] {
    return this.booking;
  }
}
