import { Injectable } from '@angular/core';
import { Fruit } from '../shared/fruit';
import { FruitsData } from '../shared/fruits-data';

@Injectable()
export class FruitService {

  constructor() { }

  getFruits(): Promise<Fruit[]> {
    console.log('insede getFruits!!!!!!!!!!!!!!!!!');
    return Promise.resolve(FruitsData);
  }

  getFruit(id: number) {
    return FruitsData.find(el => el.id === id);
  }
}
