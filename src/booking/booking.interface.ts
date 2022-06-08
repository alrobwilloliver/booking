export interface Booking {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  sitter: {
    firstName: string;
    lastName: string;
  };
  confirmed: boolean;
}

export const bookings: Booking[] = [
  {
    id: 1,
    title: 'First Booking',
    startDate: '2021-09-10 15:30:00',
    endDate: '2021-09-10 19:30:00',
    sitter: {
      firstName: 'Mary',
      lastName: 'Poppins',
    },
    confirmed: false,
  },
  {
    id: 2,
    title: 'Second Booking',
    startDate: '2021-10-10 15:30:00',
    endDate: '2021-10-10 19:30:00',
    sitter: {
      firstName: 'Developer',
      lastName: 'Test',
    },
    confirmed: false,
  },
  {
    id: 3,
    title: 'Third Booking',
    startDate: '2021-11-10 15:30:00',
    endDate: '2021-11-10 19:30:00',
    sitter: {
      firstName: 'React',
      lastName: 'Web',
    },
    confirmed: false,
  },
  {
    id: 4,
    title: 'Fourth Booking',
    startDate: '2021-12-10 15:30:00',
    endDate: '2021-12-10 19:30:00',
    sitter: {
      firstName: 'Bubble',
      lastName: 'Childcare',
    },
    confirmed: false,
  },
];
