import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', pathMatch: 'full', title: 'Inicio | EcoCanje', loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage) },
    ],
  },
  { path: '**', redirectTo: '' },
];
