import { Routes, RouterModule } from "@angular/router";
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/fruits', pathMatch: 'full' },
  { path: 'fruit/:id', component: FruitDetailComponent },
  { path: 'fruits', component: FruitsListComponent },
  { path: 'cart', component: CartComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
