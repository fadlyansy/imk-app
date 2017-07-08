import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallOfDutyPage } from './call-of-duty';

@NgModule({
  declarations: [
    CallOfDutyPage,
  ],
  imports: [
    IonicPageModule.forChild(CallOfDutyPage),
  ],
  exports: [
    CallOfDutyPage
  ]
})
export class CallOfDutyPageModule {}
