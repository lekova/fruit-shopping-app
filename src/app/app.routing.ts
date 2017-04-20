import { Routes, RouterModule } from "@angular/router";
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';

const appRoutes: Routes = [
  { path: 'fruit/:id', component: FruitDetailComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
