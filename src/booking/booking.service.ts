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
    const res = await this.bookingRepository.update(toUpdateBooking.id, {
      ...toUpdateBooking,
      confirmed: !toUpdateBooking.confirmed,
    });
    if (res.affected === 1) {
      return {
        status: 200,
        message: 'Booking updated',
      };
    }
    return {
      status: 400,
      message: 'Booking not updated',
    };
  }

  async findAll() {
    const res = await this.bookingRepository.find();
    if (!res) {
      return {
        status: 400,
        message: 'Bookings not found',
      };
    }
    return {
      status: 200,
      message: 'Bookings found',
      data: res,
    };
  }
}
