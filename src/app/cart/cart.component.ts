import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartItem } from '../shared/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems: CartItem[];
  public totalAmount: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToStore() {
    this.router.navigate(['/'])
      .catch(problem => console.log('problem is ', problem));
  }
}
