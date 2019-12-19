import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  title = 'Toornament';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    // TODO: inject the router
    private router: Router
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logOut() {
    console.log('logging out...');
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "My Personal Space",
        url   : "home/welcome-player",
        icon  : "home"
      },
      {
        title : "List of Players",
        url   : "home/players-list",
        icon  : "list"
      },
      {
        title : "List of Teams",
        url   : "home/teams-list",
        icon  : "list"
      },
      {
        title : "List of Tournaments",
        url   : "home/tournaments-list",
        icon  : "list"
      },
      {
        title : "Create a new Team",
        url   : "home/create-team",
        icon  : "create"
      },
      {
        title : "Create a new Tournament",
        url   : "home/create-tournament",
        icon  : "create"
      }
    ]
  }
}
