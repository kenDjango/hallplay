import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  private eventDate: any;
  private place: any;
  private numberPlayer: any;
  private gameName: any;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
  }

  createGame() {
    let res= "Votre partie aura lieu le " + this.eventDate + " a " + this.place;
    res += " pour une partie de " + this.gameName + " a " + this.numberPlayer +" joueurs";

    let alert = this.alertCtrl.create({
      title: 'Résumé de votre partie',
      subTitle: res,
      buttons: ['Ok']
    });
    alert.present();
  }
}
