import { Component, OnInit } from '@angular/core';
import { Fruit } from '../shared/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.scss']
})
export class FruitsListComponent implements OnInit {
  fruits: Fruit[] = [];

  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.getFruits();
  }

  getFruits(): void {
    this.fruitService.getFruits().then(result => this.fruits = result);
  }
}

