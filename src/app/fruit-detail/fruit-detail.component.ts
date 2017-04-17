import { Component, OnInit } from '@angular/core';
import { Fruit } from '../shared/fruit';
import { FruitsData } from '../shared/fruits-data';
@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {
  fruit: Fruit;
  constructor() { }

  ngOnInit() {
    const fr = FruitsData[0];
    this.fruit = new Fruit(fr.id, fr.name, fr.price, fr.description, fr.calories, fr.img);
  }
}
