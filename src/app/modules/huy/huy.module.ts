import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuyComponent } from './huy.component';
import { HuyRoutes } from './huy.routing';

@NgModule({
  imports: [
    CommonModule,
    HuyRoutes
  ],
  declarations: [HuyComponent]
})
export class HuyModule { }
