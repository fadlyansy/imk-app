import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WatchDogPage } from './watch-dog';

@NgModule({
  declarations: [
    WatchDogPage,
  ],
  imports: [
    IonicPageModule.forChild(WatchDogPage),
  ],
  exports: [
    WatchDogPage
  ]
})
export class WatchDogPageModule {}
