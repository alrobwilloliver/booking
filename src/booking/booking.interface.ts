export interface Booking {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  name: string;
  confirmed: boolean;
}

export interface updateDto {
  id: number;
}

export const bookings: Booking[] = [
  {
    id: 1,
    title: 'First Booking',
    startDate: '2021-09-10 15:30:00',
    endDate: '2021-09-10 19:30:00',
    name: 'Mary',
    confirmed: false,
  },
  {
    id: 2,
    title: 'Second Booking',
    startDate: '2021-10-10 15:30:00',
    endDate: '2021-10-10 19:30:00',
    name: 'Dev',
    confirmed: false,
  },
  {
    id: 3,
    title: 'Third Booking',
    startDate: '2021-11-10 15:30:00',
    endDate: '2021-11-10 19:30:00',
    name: 'Test',
    confirmed: false,
  },
  {
    id: 4,
    title: 'Fourth Booking',
    startDate: '2021-12-10 15:30:00',
    endDate: '2021-12-10 19:30:00',
    name: 'Alan',
    confirmed: false,
  },
];
