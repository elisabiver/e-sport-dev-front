import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeTournamentPageRoutingModule } from './welcome-tournament-routing.module';

import { WelcomeTournamentPage } from './welcome-tournament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeTournamentPageRoutingModule
  ],
  declarations: [WelcomeTournamentPage]
})
export class WelcomeTournamentPageModule {}
