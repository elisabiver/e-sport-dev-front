import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePlayerPageRoutingModule } from './welcome-player-routing.module';

import { WelcomePlayerPage } from './welcome-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePlayerPageRoutingModule
  ],
  declarations: [WelcomePlayerPage]
})
export class WelcomePlayerPageModule {}
