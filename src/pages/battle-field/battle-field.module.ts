import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BattleFieldPage } from './battle-field';

@NgModule({
  declarations: [
    BattleFieldPage,
  ],
  imports: [
    IonicPageModule.forChild(BattleFieldPage),
  ],
  exports: [
    BattleFieldPage
  ]
})
export class BattleFieldPageModule {}
