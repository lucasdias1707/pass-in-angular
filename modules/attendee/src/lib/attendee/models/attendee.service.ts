import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RootAttendee } from "./attendee";

@Injectable({
    providedIn: 'root'
})
export class AttendeeService {
    readonly apiUrl = 'http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees';

    constructor(private http: HttpClient) { }
    getAttendees() {
        return this.http.get<RootAttendee>(this.apiUrl);
    }

    getAttendeeByQuery(query: string) {
        return this.http.get<RootAttendee>(`${this.apiUrl}?query=${query}`);
    }
}