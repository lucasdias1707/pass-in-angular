import { AttendeeService } from './models/attendee.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import dayjs from 'dayjs'; // Day.js default import
import relativeTime from 'dayjs/plugin/relativeTime'; // Import relativeTime plugin
import 'dayjs/locale/pt-br'; // Import of locale pt-br (Brazilian Portuguese)
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RootAttendee } from './models/attendee';

@Component({
  selector: 'lib-attendee',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './attendee.component.html',
  styleUrl: './attendee.component.scss',
})
export class AttendeeComponent implements OnInit {
  rootAttendees$: Observable<RootAttendee> = this.attendeeService
    .getAttendees()
    .pipe(
      map((root) => {
        root.attendees.forEach((attendee) => {
          attendee.createdAt = dayjs().to(attendee.createdAt);
          attendee.checkedInAt = dayjs().to(attendee.checkedInAt);
        });
        return root;
      })
    );

  constructor(private attendeeService: AttendeeService) {}

  // uma forma de carregar os dados
  ngOnInit() {
    // Extending Day.js with the relativeTime plugin
    dayjs.extend(relativeTime);
    // Setting the locale to pt-br
    dayjs.locale('pt-br');
    // this.attendeeService.getAttendees().subscribe((attendees) => {
    // console.log(attendees);
    // });
  }
}
