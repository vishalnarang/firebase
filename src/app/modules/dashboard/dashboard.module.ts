import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { JwCommonModule } from '../jw-common/jw-common.module';
import { AddOrganizationComponent } from './components/add-organization/add-organization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { InputSwitchModule } from 'primeng-lts/inputswitch';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }

];



@NgModule({
  declarations: [DashboardComponent, AddOrganizationComponent, ViewDetailsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    JwCommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    InputSwitchModule,
    RouterModule.forChild(dashboardRoutes),
  ],
  entryComponents: [
    AddOrganizationComponent,
    ViewDetailsComponent
  ]
})
export class DashboardModule { }
