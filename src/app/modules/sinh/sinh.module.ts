import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinhComponent } from './sinh.component';
import { SinhRoutes } from './sinh.routing';

@NgModule({
  imports: [
    CommonModule,
    SinhRoutes
  ],
  declarations: [SinhComponent]
})
export class SinhModule { }
