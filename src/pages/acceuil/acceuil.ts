import { Component } from '@angular/core';
import {AlertController, NavController, NavParams, Platform} from 'ionic-angular';
import { CreatePage } from "../create/create";
import {FindGame} from "../find/find";
import {QRReader} from "../QRReader/reader";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the AcceuilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-acceuil',
  templateUrl: 'acceuil.html',
})

export class AcceuilPage {
  boardgames = [{
    "time":"20h30 19/10/2018",
    "game" : "7Wonders",
    "address" : "5 rue de France",
    "username" : "Kader"
  },
    {
      "time":"20h30 19/10/2018",
      "game" : "7Wonders",
      "address" : "5 rue de France",
      "username" : "Kader"
    },
    {
      "time":"20h30 19/10/2018",
      "game" : "7Wonders",
      "address" : "5 rue de France",
      "username" : "Kader"
    },
    {
      "time":"20h30 19/10/2018",
      "game" : "7Wonders",
      "address" : "5 rue de France",
      "username" : "Kader"
    },
    {
      "time":"20h30 25/10/2018",
      "game" : "Poker",
      "address" : "25 rue de Voltaire",
      "username" : "Paul"}];


  private screenSize : any;
  private dummyList1 : any;
  private dummyList2 : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform : Platform,private screenOrientation: ScreenOrientation,private alertCtrl: AlertController) {
    let half_length = Math.ceil(this.boardgames.length / 2);
    this.dummyList1 = this.boardgames.slice(0,half_length);
    this.dummyList2 = this.boardgames.slice(half_length,this.boardgames.length);
    this.platform.ready().then((readySource) => {
      //console.log(this.screenOrientation.type);
      //console.log('Width: ' + this.platform.width());
      //console.log('Height: ' + this.platform.height());
      this.screenSize = this.platform.width();
      /*let alert = this.alertCtrl.create({
        title: 'Résumé de votre partie',
        subTitle: this.screenSize,
        buttons: ['Ok']
      });
      alert.present();*/
    });
  }

  ionViewDidLoad() {
  }

  onGoToCreateGame(){
    this.navCtrl.push(CreatePage);
  }

  onGoToFindGame(){
    this.navCtrl.push(QRReader);
  }
}
