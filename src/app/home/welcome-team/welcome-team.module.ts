import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeTeamPageRoutingModule } from './welcome-team-routing.module';

import { WelcomeTeamPage } from './welcome-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeTeamPageRoutingModule
  ],
  declarations: [WelcomeTeamPage]
})
export class WelcomeTeamPageModule {}
