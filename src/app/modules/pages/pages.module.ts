import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwCommonModule } from '../jw-common/jw-common.module';


export const panelModuleRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full',
  }
];

@NgModule({
  declarations: [ 
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(panelModuleRoutes),
    FormsModule,
    ReactiveFormsModule,
    JwCommonModule
  ]
})
export class PagesModule { }
