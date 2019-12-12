import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePlayerPage } from './create-player.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePlayerPageRoutingModule {}
