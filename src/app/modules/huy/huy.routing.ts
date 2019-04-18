import { Routes, RouterModule } from '@angular/router';
import { HuyComponent } from './huy.component';

const routes: Routes = [
  { path: '', component: HuyComponent },
];

export const HuyRoutes = RouterModule.forChild(routes);
