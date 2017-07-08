import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaydayPage } from './payday';

@NgModule({
  declarations: [
    PaydayPage,
  ],
  imports: [
    IonicPageModule.forChild(PaydayPage),
  ],
  exports: [
    PaydayPage
  ]
})
export class PaydayPageModule {}
