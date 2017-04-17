import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';

import { FruitService } from './services/fruit.service';

@NgModule({
  declarations: [
    AppComponent,
    FruitDetailComponent,
    FruitsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
