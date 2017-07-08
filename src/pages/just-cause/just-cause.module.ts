import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JustCausePage } from './just-cause';

@NgModule({
  declarations: [
    JustCausePage,
  ],
  imports: [
    IonicPageModule.forChild(JustCausePage),
  ],
  exports: [
    JustCausePage
  ]
})
export class JustCausePageModule {}
