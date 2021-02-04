import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlMessages } from './components/control-messages/control-messages.component';
import { PopupComponent } from './components/popup/popup.component';



@NgModule({
  declarations: [
    ControlMessages,
    PopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlMessages,
    PopupComponent
  ],
  entryComponents:[
    PopupComponent
  ]
})
export class JwCommonModule { }
