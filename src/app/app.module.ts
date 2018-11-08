import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import {AcceuilPage} from "../pages/acceuil/acceuil";
import {CreatePage} from "../pages/create/create";
import {FindGame} from "../pages/find/find";
import {Camera} from "@ionic-native/camera";
import {QRScanner} from "@ionic-native/qr-scanner";
import {QRReader} from "../pages/QRReader/reader";
import {Sensors} from "@ionic-native/sensors";
import {ScreenOrientation} from "@ionic-native/screen-orientation";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    AcceuilPage,
    CreatePage,
    FindGame,
    QRReader,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    AcceuilPage,
    CreatePage,
    FindGame,
    QRReader
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,QRScanner,Sensors,ScreenOrientation
  ]
})
export class AppModule {}
