import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('login').then((c) => c.LoginComponent)
    },
    {
        path: 'participantes',
        loadComponent: () => import('attendee').then((c) => c.AttendeeComponent)
    }
];
