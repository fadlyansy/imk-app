import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MassEffectPage } from './mass-effect';

@NgModule({
  declarations: [
    MassEffectPage,
  ],
  imports: [
    IonicPageModule.forChild(MassEffectPage),
  ],
  exports: [
    MassEffectPage
  ]
})
export class MassEffectPageModule {}
