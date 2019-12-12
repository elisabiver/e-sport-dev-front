import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTournamentPageRoutingModule } from './edit-tournament-routing.module';

import { EditTournamentPage } from './edit-tournament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTournamentPageRoutingModule
  ],
  declarations: [EditTournamentPage]
})
export class EditTournamentPageModule {}
