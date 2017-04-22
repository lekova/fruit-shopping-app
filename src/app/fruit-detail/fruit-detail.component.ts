import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Fruit } from '../shared/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {

  @Input() fruit: Fruit;
  constructor(private fruitService: FruitService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.fruitService.getFruit(+params['id']))
    .subscribe(fruit => this.fruit = fruit as Fruit);
  }

  back() {
    this.location.back();
  }
}
