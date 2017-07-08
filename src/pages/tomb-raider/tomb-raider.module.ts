import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TombRaiderPage } from './tomb-raider';

@NgModule({
  declarations: [
    TombRaiderPage,
  ],
  imports: [
    IonicPageModule.forChild(TombRaiderPage),
  ],
  exports: [
    TombRaiderPage
  ]
})
export class TombRaiderPageModule {}
