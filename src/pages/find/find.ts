import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'find',
  templateUrl: 'find.html'
})
export class FindGame {
  public photo : any;
  public base64Image : string;
  constructor(public navCtrl: NavController,  private camera : Camera, private alertCtrl : AlertController) {
    this.photo = null;
  }

  ngOnInit() {
    this.photo = null
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options) .then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photo = this.base64Image;
      //this.photos.push(this.base64Image);
      //this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }

  deletePhoto() {
    let confirm = this.alertCtrl.create({
      title: 'Sure you want to delete this photo? There is NO undo!',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            //this.photos.splice(index, 1);
            this.photo = null;
          }
        }
      ]
    });
    confirm.present();
  }

  joinGame() {

  }
}
