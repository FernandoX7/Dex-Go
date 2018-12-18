import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CacheService } from 'ionic-cache';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }
  ];

  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              private cacheService: CacheService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.cacheService.setDefaultTTL(60 * 60 * 12); // Cache data for 12 hours
      this.cacheService.setOfflineInvalidate(false); // Keep data when device is offline

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
