import { FruitShoppingAppPage } from './app.po';

describe('fruit-shopping-app App', () => {
  let page: FruitShoppingAppPage;

  beforeEach(() => {
    page = new FruitShoppingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
