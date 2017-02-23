import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SaintDetailPage} from '../saint-detail/saint-detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  santi: any[];

  constructor(public navCtrl: NavController) {
    this.santi = [];
    for (let I=0; I< 10; I++){

      this.santi.push({Nome : "Santo " + I, Id : I});
    }

  }
  saintSelected(santo){

    this.navCtrl.push(SaintDetailPage, {item: santo})
    //alert("Oggi è: " + santo.Nome);
  }
}
