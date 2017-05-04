import { Fruit } from './fruit';

export class Cart {
  constructor(
    public cartItems: CartItem[],
    public totalAmount: number
  ) {}
}

export class CartItem {
  public total = 0;
  constructor(
    public item: Fruit,
    public count: number,
  ) {
    if(item != null && item.price != 0 && count != 0) {
      this.total = item.price * count;
    }
  }
}
