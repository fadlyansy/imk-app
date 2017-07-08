import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaydayPage } from './../payday/payday';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  PaydayPage: any = 'PaydayPage';
  CallOfDutyPage: any = 'CallOfDutyPage';
  AssasinsCreedPage: any = 'AssasinsCreedPage';
  TombRaiderPage: any = 'TombRaiderPage';
  MassEffectPage: any = 'MassEffectPage';
  JustCausePage: any = 'JustCausePage';
  BattleFieldPage: any = 'BattleFieldPage';
  WatchDogPage: any = 'WatchDogPage';
  MafiaPage: any = 'MafiaPage';
  FarCryPage: any = 'FarCryPage';



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {

  }
         
}
