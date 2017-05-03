import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';

import { FruitService } from './services/fruit.service';
import { WebStorageService, LocalStorageService, SessionStorageService } from './services/web-storage.service';
import { CartComponent } from './cart/cart.component';
import { FilterByTextPipe } from './pipes/filter-by-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FruitDetailComponent,
    FruitsListComponent,
    CartComponent,
    FilterByTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    FruitService,
    WebStorageService,
    LocalStorageService,
    SessionStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
