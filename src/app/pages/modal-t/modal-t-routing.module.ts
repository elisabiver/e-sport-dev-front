import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTPage } from './modal-t.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTPageRoutingModule {}
