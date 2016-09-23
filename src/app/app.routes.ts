import { Routes, RouterModule } from '@angular/router';
import { Checkout } from './checkout';


export const ROUTES: Routes = [
  { path: '',      component: Checkout },
  { path: '**',    component: Checkout },
];
