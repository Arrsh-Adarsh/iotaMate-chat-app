import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./app.component').then((cp) => cp.AppComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./components/profile/profile.component').then(
        (cp) => cp.ProfileComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (cp) => cp.LoginComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (cp) => cp.LoginComponent
      ),
  },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
