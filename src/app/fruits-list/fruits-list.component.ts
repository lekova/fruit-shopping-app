import { Component, OnInit } from '@angular/core';
import { Fruit } from '../shared/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.scss']
})
export class FruitsListComponent implements OnInit {
  fruits: Fruit[];
  totalCount: number; // TODO find why it doesn't work with fruits.length

  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.getFruits();
  }

  getFruits(): void {
    this.fruitService.getFruits().then(result => {
      this.totalCount = result.length;
      return this.fruits = result;
    });
  }
}

