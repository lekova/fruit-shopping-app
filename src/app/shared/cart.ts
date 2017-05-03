import { Fruit } from './fruit';

export class Cart {
  constructor(
    public cartItems: CartItem[],
    public totalAmount: number
  ) {}
}

export class CartItem {
  constructor(
    public item: Fruit,
    public count: number
  ) {}
}
