import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsInTournamentListPageRoutingModule } from './teams-in-tournament-list-routing.module';

import { TeamsInTournamentListPage } from './teams-in-tournament-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsInTournamentListPageRoutingModule
  ],
  declarations: [TeamsInTournamentListPage]
})
export class TeamsInTournamentListPageModule {}
