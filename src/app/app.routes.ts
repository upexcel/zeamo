import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home';


export const ROUTES: Routes = [
  { path: '',  component: HomePage },
  { path: '**',    component: HomePage },
];
