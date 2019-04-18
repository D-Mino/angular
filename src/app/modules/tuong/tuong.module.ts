import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuongComponent } from './tuong.component';
import { TuongRoutes } from './tuong.routing';

@NgModule({
  imports: [
    CommonModule,
    TuongRoutes
  ],
  declarations: [TuongComponent]
})
export class TuongModule { }
