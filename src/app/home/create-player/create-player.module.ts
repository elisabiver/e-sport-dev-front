import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePlayerPageRoutingModule } from './create-player-routing.module';

import { CreatePlayerPage } from './create-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlayerPageRoutingModule
  ],
  declarations: [CreatePlayerPage]
})
export class CreatePlayerPageModule {}
