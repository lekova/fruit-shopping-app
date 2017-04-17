import { Component, OnInit } from '@angular/core';
import { Fruit } from '../shared/fruit';
@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {
  fruit: Fruit;
  constructor() { }

  ngOnInit() {
    this.fruit = new Fruit('Red apple', 0.6, 'Eat one every day to keep the doctor away!', '../assets/products/apple.jpg');
  }
}
