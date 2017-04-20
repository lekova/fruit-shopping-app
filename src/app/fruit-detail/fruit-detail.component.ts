import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Fruit } from '../shared/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {
  constructor(private fruitService: FruitService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }
}
