
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    data: { preload: false }
  },
  {
    path: 'page',
    loadChildren: './modules/pages/pages.module#PagesModule',
    data: { preload: false }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/page/login'
  },
  { path: '**', redirectTo: '/page/login' }
];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
