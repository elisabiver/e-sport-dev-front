import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTPageRoutingModule } from './modal-t-routing.module';

import { ModalTPage } from './modal-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTPageRoutingModule
  ],
  declarations: [ModalTPage]
})
export class ModalTPageModule {}
