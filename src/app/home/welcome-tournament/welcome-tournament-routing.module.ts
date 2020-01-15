import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeTournamentPage } from './welcome-tournament.page';

const routes: Routes = [
  {
    path: ':id',
    component: WelcomeTournamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeTournamentPageRoutingModule {}
