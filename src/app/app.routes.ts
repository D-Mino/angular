import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'huy',
    loadChildren: './modules/huy/huy.module#HuyModule'
  },
  {
    path: 'tuong',
    loadChildren: './modules/tuong/tuong.module#TuongModule'
  },
  {
    path: 'khoa',
    loadChildren: './modules/khoa/khoa.module#KhoaModule'
  },
  {
    path: 'sinh',
    loadChildren: './modules/sinh/sinh.module#SinhModule'
  },
  { path: '**', redirectTo: 'huy', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutes {}
