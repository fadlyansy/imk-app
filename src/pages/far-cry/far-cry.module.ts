import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarCryPage } from './far-cry';

@NgModule({
  declarations: [
    FarCryPage,
  ],
  imports: [
    IonicPageModule.forChild(FarCryPage),
  ],
  exports: [
    FarCryPage
  ]
})
export class FarCryPageModule {}
