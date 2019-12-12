import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeTeamPage } from './welcome-team.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeTeamPageRoutingModule {}
