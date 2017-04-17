import { Component, OnInit } from '@angular/core';
import { Veggie } from '../shared/veggie';
@Component({
  selector: 'app-veggie-detail',
  templateUrl: './veggie-detail.component.html',
  styleUrls: ['./veggie-detail.component.scss']
})
export class VeggieDetailComponent implements OnInit {
  veggie: Veggie;
  constructor() { }

  ngOnInit() {
    this.veggie = new Veggie('Red apple', 0.6, 'Eat one every day to keep the doctor away!', '../assets/products/apl.jpg');
  }
}
