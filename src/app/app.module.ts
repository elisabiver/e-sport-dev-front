import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorProvider } from './auth/auth-interceptor.service';

import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ModalPageModule } from './pages/modal/modal.module';
import { ModalTPageModule } from './pages/modal-t/modal-t.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot(), LeafletModule.forRoot(), ModalPageModule, ModalTPageModule],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}