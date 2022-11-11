import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagregistroPageRoutingModule } from './pagregistro-routing.module';

import { PagregistroPage } from './pagregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagregistroPageRoutingModule
  ],
  declarations: [PagregistroPage]
})
export class PagregistroPageModule {}
