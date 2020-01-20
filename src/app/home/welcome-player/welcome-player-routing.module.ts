import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePlayerPage } from './welcome-player.page';
import { WebsocketService } from 'src/websocket/websocket.service';

const routes: Routes = [
  {
    path: '',
    component: WelcomePlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [WebsocketService]
})
export class WelcomePlayerPageRoutingModule {}
