import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Fruit } from '../shared/fruit';
import { Cart, CartItem } from '../shared/cart';
import { FruitService } from '../services/fruit.service';
import { LocalStorage } from '../services/web-storage.decorator';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.scss']
})
export class FruitsListComponent implements OnInit {
  fruits: Fruit[] = [];
  selectedFruit: Fruit;
  isWishList: boolean;
  showListText = 'Wish';
  private textFilter = '';
  @LocalStorage() public cart: Cart = null;

  constructor(private router: Router,
    private fruitService: FruitService) { }

  ngOnInit() {
    this.getFruits();
  }

  getFruits(): void {
    this.fruitService.getFruits().then(result => this.fruits = result);
  }

  onSelect(fruit: Fruit): void {
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
    this.fruits.map((el) => {
      if (el.id === id) {
        el.favorite = !el.favorite;
      }
    });
    // TODO: Should raise event so the fruit component knows about the change
  }

  showFruit() {
    this.router.navigate(['/fruit/', this.selectedFruit.id])
    .then((successful) => console.log('route success', successful))
    .catch(problem => console.log('problem is ', problem));
  }

  showWishList() {
    if (this.isWishList) {
      this.getFruits();
      this.isWishList = !this.isWishList;
      this.showListText = 'Wish';
      return;
    }
    this.fruits = this.fruits.filter(el => el.favorite);
    this.isWishList = !this.isWishList;
    this.showListText = 'Full';
  }

  addToCart(fruit: Fruit) {
    if(this.cart == null) {
      this.cart = new Cart([new CartItem(fruit, 1)], fruit.price);
    } else {
      const cartItem = new CartItem(fruit, 1);
      const tempCart = this.cart as Cart;
      const tempCarItems = tempCart.cartItems as CartItem[];

      const index = tempCarItems.findIndex(el => el.item.id === fruit.id);
      if (index >= 0) {
        tempCarItems[index].count = ++tempCarItems[index].count;
        tempCarItems[index].total = tempCarItems[index].total += fruit.price;
      } else {
        tempCarItems.push(cartItem);
      }

      tempCart.cartItems = tempCarItems;
      tempCart.totalAmount += fruit.price;
      this.cart = tempCart;
      console.log('this.cart items ', this.cart.cartItems);
    }
  }
}
