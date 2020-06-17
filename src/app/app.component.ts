import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
   /* {
      title: 'Mi Perfil',
      url: '/folder/Inbox',
      icon: 'mail'
    },*/
    {
      title: 'Login',
      url: '/login',
      icon: 'mail'
    },
    {
      title: 'Mi Cuenta',
      url: '/user-perfil/:5',
      icon: 'paper-plane'
    },
    {
      title: 'Usuarios',
      url: 'user-list',
      icon: 'archive'
    },
    {
      title: 'Empresas',
      url: 'company',
      icon: 'archive'
    }
  ];
  public labels = ['Ayuda' , 'Cerrar Sesión'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
