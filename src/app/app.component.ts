import {NgModule, Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Role } from './models/role';
import { User } from './models/user';
import { UserService } from './providers/user.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: User;
  user: any;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'mail'
    },/*
    {
      title: 'Mi Cuenta',
      url: 'user-perfil/:id',
      icon: 'paper-plane'
    },*/
    {
      title: 'Usuarios',
      url: 'user-list',
      icon: 'archive'
    },
    {
      title: 'Empresas',
      url: 'company',
      icon: 'archive'
    },
    {
      title: 'prueba',
      url: 'pruebas',
      icon: 'archive'
    }
  ];
  public labels = ['Ayuda' , 'Cerrar Sesión'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: UserService

  ) {

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.user = this.currentUser['user']['role_id_role'];
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  //get isAdmin() {
    //return this.currentUser && this.currentUser.role === 1;
  //}
}
