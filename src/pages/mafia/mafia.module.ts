import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MafiaPage } from './mafia';

@NgModule({
  declarations: [
    MafiaPage,
  ],
  imports: [
    IonicPageModule.forChild(MafiaPage),
  ],
  exports: [
    MafiaPage
  ]
})
export class MafiaPageModule {}
