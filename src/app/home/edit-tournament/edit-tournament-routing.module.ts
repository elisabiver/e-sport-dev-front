import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTournamentPage } from './edit-tournament.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditTournamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTournamentPageRoutingModule {}
