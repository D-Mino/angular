import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhoaComponent } from './khoa.component';
import { KhoaRoutes } from './khoa.routing';

@NgModule({
  imports: [
    CommonModule,
    KhoaRoutes
  ],
  declarations: [KhoaComponent]
})
export class KhoaModule { }
