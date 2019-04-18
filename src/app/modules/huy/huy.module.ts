import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuyComponent } from './huy.component';
import { HuyRoutes } from './huy.routing';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  imports: [
    CommonModule,
    HuyRoutes,
    ComponentsModule
  ],
  declarations: [HuyComponent]
})
export class HuyModule { }
