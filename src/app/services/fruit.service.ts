import { Injectable } from '@angular/core';
import { Fruit } from '../shared/fruit';
import { FruitsData } from '../shared/fruits-data';

@Injectable()
export class FruitService {

  constructor() { }

  getFruits(): Fruit[] {
    return FruitsData;
  }
}
