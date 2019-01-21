import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage:any = 'LoginPage';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {

    if (this.platform.is('cordova')) {

    // make your native API calls
      this.statusBar.styleDefault();
      this.splashScreen.hide(); 

    } else {

      // fallback to browser APIs
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    }
      
      
    });
    
  }
}
