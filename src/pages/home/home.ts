import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcceuilPage} from "../acceuil/acceuil";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  onGoToMenu() {
    console.log(AcceuilPage);
    this.navCtrl.push(AcceuilPage);
  }

}
