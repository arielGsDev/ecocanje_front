import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', pathMatch: 'full', title: 'Inicio | EcoCanje', loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage) },
      { path: 'eventos', title: 'Eventos | EcoCanje', loadComponent: () => import('./features/events/events.page').then((m) => m.EventsPage) },
      { path: 'eventos/:id', title: 'Evento | EcoCanje', loadComponent: () => import('./features/events/event.page').then((m) => m.EventPage) },
      { path: 'eventos/:id/inscripcion', title: 'Inscripción | EcoCanje', loadComponent: () => import('./features/signup/signup.page').then((m) => m.SignupPage) },
      { path: 'registrar', title: 'Registrar entrega | EcoCanje', loadComponent: () => import('./features/register/register.page').then((m) => m.RegisterPage) },
      { path: 'aportes', title: 'Mis aportes | EcoCanje', loadComponent: () => import('./features/contributions/contributions.page').then((m) => m.ContributionsPage) },
    ],
  },
  { path: '**', redirectTo: '' },
];
