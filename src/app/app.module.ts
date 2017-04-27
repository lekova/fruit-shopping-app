import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';

import { FruitService } from './services/fruit.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitDetailComponent,
    FruitsListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
