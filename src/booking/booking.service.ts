import { Injectable } from '@nestjs/common';
import { Booking } from './booking.interface';

@Injectable()
export class BookingService {
  private readonly cats: Booking[] = [];

  create(booking: Booking) {
    this.cats.push(booking);
  }

  findAll(): Booking[] {
    return this.cats;
  }
}
