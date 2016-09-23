import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home';
import { Checkout } from './checkout';

export const ROUTES: Routes = [
    { path: '', component: HomePage },
    { path: 'checkout', component: Checkout },
    { path: '**', component: HomePage },
];
