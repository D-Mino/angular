import { Routes, RouterModule } from '@angular/router';
import { KhoaComponent } from './khoa.component';

const routes: Routes = [
  { path: '', component: KhoaComponent },
];

export const KhoaRoutes = RouterModule.forChild(routes);
