import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CustomSidebarModule } from '../sidebar/sidebar.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CustomSidebarModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
