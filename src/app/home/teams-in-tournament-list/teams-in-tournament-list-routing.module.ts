import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsInTournamentListPage } from './teams-in-tournament-list.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsInTournamentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsInTournamentListPageRoutingModule {}
