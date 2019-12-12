import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePlayerPage } from './welcome-player.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomePlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePlayerPageRoutingModule {}
