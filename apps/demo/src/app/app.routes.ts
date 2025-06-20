import type { Routes } from '@angular/router';
 
export  default [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('./features/home/home.component'),
  },
] satisfies Routes;
