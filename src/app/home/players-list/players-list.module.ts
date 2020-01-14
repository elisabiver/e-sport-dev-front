import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OrderModule } from 'ngx-order-pipe';


import { PlayersListPageRoutingModule } from './players-list-routing.module';

import { PlayersListPage } from './players-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderModule,
    PlayersListPageRoutingModule
  ],
  declarations: [PlayersListPage]
})
export class PlayersListPageModule {}
