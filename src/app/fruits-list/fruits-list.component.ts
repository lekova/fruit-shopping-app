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
  selectedFruit: Fruit;

  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.getFruits();
  }

  getFruits(): void {
    this.fruitService.getFruits().then(result => this.fruits = result);
  }

  onSelect(fruit: Fruit): void {
    // console.log('selected fruit is ', fruit);
    this.selectedFruit = fruit;
  }

  sortByPrice() {
    return this.fruits.sort((a, b) => a.price - b.price);
  }

  sortByName() {
    return this.fruits.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
  };

  setFavorite(id: number) {
    const fruit: Fruit = this.fruits[id];
    this.fruits[id].favorite = !this.fruits[id].favorite;
    console.log(this.fruits[id].name, ' = ', this.fruits[id].favorite);
  }
}
