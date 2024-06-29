export type RootAttendee = {
  attendees: Attendee[];
  total: number;
}

export type Attendee = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt?: string;
}
