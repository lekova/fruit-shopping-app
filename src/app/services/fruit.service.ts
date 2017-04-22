import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Fruit } from '../shared/fruit';

@Injectable()
export class FruitService {
  private fruits: Fruit[] = [];
  private fruitsUrl = '../../assets/fruits-data.json';

  constructor(private http: Http) { }

  getFruits()  {
    return this.http.get(this.fruitsUrl)
      .toPromise()
      .then(response => {
        return response.json() as Fruit[];
      })
      .catch(this.handleError);
  }

  getFruit(id: number): Promise<Fruit> {
    // const url = `${this.fruitsUrl}/${id}`;
    return this.http.get(this.fruitsUrl)
      .toPromise()
      .then(response => {
        const allFruits = response.json() as Fruit[];
        return allFruits.find(el => el.id === id) as Fruit;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
