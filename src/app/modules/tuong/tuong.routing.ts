import { Routes, RouterModule } from '@angular/router';
import { TuongComponent } from './tuong.component';

const routes: Routes = [
  { path: '', component: TuongComponent },
];

export const TuongRoutes = RouterModule.forChild(routes);
