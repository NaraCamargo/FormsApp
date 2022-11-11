import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagregistroPage } from './pagregistro.page';

const routes: Routes = [
  {
    path: '',
    component: PagregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagregistroPageRoutingModule {}
