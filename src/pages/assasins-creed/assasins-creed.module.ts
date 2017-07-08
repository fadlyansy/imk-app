import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssasinsCreedPage } from './assasins-creed';

@NgModule({
  declarations: [
    AssasinsCreedPage,
  ],
  imports: [
    IonicPageModule.forChild(AssasinsCreedPage),
  ],
  exports: [
    AssasinsCreedPage
  ]
})
export class AssasinsCreedPageModule {}
