import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  sitterName: string;

  @Column()
  confirmed: boolean;
}
