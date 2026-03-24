import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'archive',
    loadComponent: () => import('./pages/archive/archive.component').then(m => m.ArchiveComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'article/:slug',
    loadComponent: () => import('./pages/article/article.component').then(m => m.ArticleComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
