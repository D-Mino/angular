import { Routes, RouterModule } from '@angular/router';
import { SinhComponent } from './sinh.component';

const routes: Routes = [
  { path: '', component: SinhComponent },
];

export const SinhRoutes = RouterModule.forChild(routes);
