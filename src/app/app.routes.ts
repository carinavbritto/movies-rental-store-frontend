import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'movies'
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.routes').then(r => r.MOVIES_ROUTES)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: 'cms',
    loadComponent: () => import('./cms/cms.component').then(c => c.CmsComponent),
    canActivate: [AuthGuard]
  }
];
