import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from '../entity/booking.entity';
import { Repository } from 'typeorm';

import { updateDto } from './booking.interface';
@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}

  async update(booking: updateDto) {
    const toUpdateBooking = await this.bookingRepository.findOneBy({
      id: booking.id,
    });
    return this.bookingRepository.update(toUpdateBooking.id, {
      ...toUpdateBooking,
      confirmed: !toUpdateBooking.confirmed,
    });
  }

  async findAll() {
    return this.bookingRepository.find();
  }
}
