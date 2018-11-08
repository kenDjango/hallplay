import { Component } from '@angular/core';
import {NavController, Platform, ToastController, ViewController} from 'ionic-angular';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {Sensors} from "@ionic-native/sensors";

@Component({
  selector: 'reader',
  templateUrl: 'reader.html'
})
export class QRReader {
  private scanSub: any;
  private isFlashLightOn : boolean = false;
  private isBackMode: boolean = true;
  private lux : number;

  constructor(public navCtrl: NavController, private qrScanner: QRScanner,private toastCtrl: ToastController,private viewController: ViewController,platform: Platform,private sensors: Sensors) {
    this.lux = 0;
    platform.ready().then(() => {
      this.initSensor();
    })
  }

  joinGame() {
  }

  initSensor() {
    this.sensors.enableSensor("LIGHT");
    setInterval(() => {
      this.sensors.getState().then( (value => {
        this.lux = value[0];
        if(this.lux <= 25){
          this.qrScanner.enableLight();
        }else{
          if(!this.isFlashLightOn){
            this.qrScanner.disableLight();
          }
        }
      }))
    }, 1000)
  }

  toggleFlashLight(){
    this.isFlashLightOn = !this.isFlashLightOn;
    if(this.isFlashLightOn){
      this.qrScanner.enableLight();
    }
    else{
      this.qrScanner.disableLight();
    }
  }

  toggleCamera(){
    this.isBackMode =  !this.isBackMode;
    if(this.isBackMode){
      this.qrScanner.useFrontCamera();
    }
    else{
      this.qrScanner.useBackCamera();
    }
  }

  static showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }

  static hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

  ionViewWillEnter(){
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            let toast = this.toastCtrl.create({
              message: text,
              duration: 3000,
            });
            toast.present();
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
          });
          this.qrScanner.show();
        } else if (status.denied) {
        } else {
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
  ionViewWillUnload(){
    QRReader.hideCamera();
    this.qrScanner.disableLight();
  }
}
